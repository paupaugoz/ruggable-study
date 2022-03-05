import '../../setupTests';
import { render, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox';

describe('React-select component tests', () => {
  const renderWrapper = () => render(<SearchBox />);

  it('should render the search box with the proper placeholder', () => {
    renderWrapper();

    const placeholder = screen.getByText('Search for a Github User...');

    expect(placeholder).toBeInTheDocument();
  });
});
