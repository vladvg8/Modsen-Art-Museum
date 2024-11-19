import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LocalStorageProvider, useLocalStorage } from 'contexts/LocalStorageContext';
import FavoriteButton from 'components/FavoriteButton';

jest.mock('contexts/LocalStorageContext', () => ({
  useLocalStorage: jest.fn(),
  LocalStorageProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('FavoriteButton', () => {
  const addIdMock = jest.fn();
  const removeIdMock = jest.fn();

  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      ids: [],
      addId: addIdMock,
      removeId: removeIdMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and displays bookmark icon', () => {
    render(
      <LocalStorageProvider>
        <FavoriteButton artworkId={1} />
      </LocalStorageProvider>
    );

    const bookmarkIcon = screen.getByAltText('Bookmark');
    expect(bookmarkIcon).toBeInTheDocument();
  });

  it('toggles favorite state on click using alt text', () => {
    const { rerender } = render(
      <LocalStorageProvider>
        <FavoriteButton artworkId={1} />
      </LocalStorageProvider>
    );

    const bookmarkIcon = screen.getByAltText('Bookmark');
    fireEvent.click(bookmarkIcon);
    expect(addIdMock).toHaveBeenCalledWith(1);

    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      ids: [1],
      addId: addIdMock,
      removeId: removeIdMock,
    });
  });
});
