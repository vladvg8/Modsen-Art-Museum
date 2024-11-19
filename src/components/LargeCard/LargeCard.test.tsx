import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import LargeCard from 'components/LargeCard';
import { CardProps } from 'constants/CardProps';
import { LocalStorageProvider } from 'contexts/LocalStorageContext';
import notExistentImageIcon from 'assets/images/not-existent-image-icon.svg';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

const mockProps: CardProps = {
  artworkId: 1,
  title: 'Mona Lisa',
  author: 'Leonardo da Vinci',
  image: 'mona-lisa.jpg',
  status: 'Available',
};

describe('LargeCard', () => {
  it('renders correctly with given props', () => {
    render(
      <LocalStorageProvider>
        <LargeCard {...mockProps} />
      </LocalStorageProvider>
    );

    const imageElement = screen.getByAltText('Mona Lisa');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'mona-lisa.jpg');
    expect(screen.getByText('Mona Lisa')).toBeInTheDocument();
    expect(screen.getByText('Leonardo da Vinci')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('handles image error and sets default image', () => {
    render(
      <LocalStorageProvider>
        <LargeCard {...mockProps} image="invalid-image.jpg" />
      </LocalStorageProvider>
    );

    const imageElement = screen.getByAltText('Mona Lisa');
    fireEvent.error(imageElement);

    expect(imageElement).toHaveAttribute('src', notExistentImageIcon);
  });
});
