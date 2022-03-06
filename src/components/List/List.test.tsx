import '../../setupTests';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { List } from './List';

axios.get = jest.fn();

describe('List component tests', () => {
  const renderWrapper = (selectedValue = 'test') =>
    render(<List selectedValue={selectedValue} />);

  it('should render the List component without crashing', () => {
    renderWrapper();

    expect(screen).not.toBeNull();
  });
});
