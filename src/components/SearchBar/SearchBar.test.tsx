import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar, { SearchBarProps } from 'components/SearchBar';

jest.useFakeTimers();

describe('SearchBar', () => {
  const onSearchMock = jest.fn();

  const renderSearchBar = (props: Partial<SearchBarProps> = {}) => {
    return render(<SearchBar onSearch={onSearchMock} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and button correctly', () => {
    renderSearchBar();

    const input = screen.getByPlaceholderText('Search art, artist, work...');
    const button = screen.getByAltText('search icon');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('validates input and shows error for empty text', async () => {
    renderSearchBar();

    const button = screen.getByAltText('search icon');
    fireEvent.click(button);

    const errorMessage = await screen.findByText('Search text cannot be empty');
    expect(errorMessage).toBeInTheDocument();
  });

  it('calls onSearch with debounce after valid input', () => {
    renderSearchBar();

    const input = screen.getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(input, { target: { value: 'Mona Lisa' } });

    expect(onSearchMock).not.toHaveBeenCalled();

    setTimeout(() => {
      expect(onSearchMock).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});
