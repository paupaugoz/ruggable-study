import '../../setupTests';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { List } from './List';
import { mockEmptySuccess, mockRepositorySuccess } from './mocks';
import { ListTestId } from './TestId';

describe('List component tests', () => {
  const renderWrapper = () => render(<List selectedValue='' />);

  it('should render the List component without crashing', () => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        jest.fn(() => Promise.resolve(mockRepositorySuccess)),
      );
    renderWrapper();

    expect(screen).not.toBeNull();
  });

  it('should render the proper list items when a successful request is made', async () => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        jest.fn(() => Promise.resolve(mockRepositorySuccess)),
      );
    renderWrapper();

    // Check that all elements have the proper text
    await waitFor(() => {
      expect(screen.getByTestId(ListTestId.listGroup)).toBeInTheDocument();
    });

    // Optimization - loop through mockRepository to avoid hard-coding
    expect(screen.getByText('Full Test')).toBeInTheDocument();
    expect(screen.getByText('Stars: 1')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();

    expect(screen.getByText('Full Test 2')).toBeInTheDocument();
    expect(screen.getByText('Stars: 2')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should not render list items when there are no results found', async () => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve(mockEmptySuccess)));
    renderWrapper();

    // Check that all elements have the proper text
    await waitFor(() => {
      expect(
        screen.queryByTestId(ListTestId.listGroup),
      ).not.toBeInTheDocument();
    });
  });
});
