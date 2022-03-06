import '../../setupTests';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { SearchBox } from './SearchBox';
import { SearchBoxTestId } from './TestId';

axios.get = jest.fn();

describe('React-select component tests', () => {
  const renderWrapper = () =>
    render(<SearchBox setSelectedValue={jest.fn()} />);

  it('should render the search box with the proper placeholder', () => {
    renderWrapper();

    const placeholder = screen.getByText('Search for a Github User...');

    expect(placeholder).toBeInTheDocument();
  });

  it('should be able to retrieve a list of users on successful get request', async () => {
    renderWrapper();

    const searchBox: any = await screen.findByTestId(SearchBoxTestId.wrapper);

    expect(searchBox).toBeInTheDocument();

    expect(screen.getByRole('combobox'));
    userEvent.type(screen.getByRole('combobox'), 'Typing');
  });
});
