import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';

describe('Header', () => {
  it('renders correctly with logo and navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText('Modsen Art Museum dark logo');
    expect(logo).toBeInTheDocument();

    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);

    const favoriteLinks = screen.getAllByText('Your favorite');
    expect(favoriteLinks.length).toBeGreaterThan(0);
  });

  it('toggles burger menu on icon click', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const burgerIcon = screen.getByText('☰');
    fireEvent.click(burgerIcon);

    const burgerMenu = screen.getByTestId('burger-menu');
    expect(burgerMenu).toHaveStyle('display: flex');

    fireEvent.click(burgerIcon);
    expect(burgerMenu).toHaveStyle('display: none');
  });

  it('navigates correctly on link click', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks[0].closest('a')).toHaveAttribute('href', '/');

    const favoriteLinks = screen.getAllByText('Your favorite');
    expect(favoriteLinks[0].closest('a')).toHaveAttribute('href', '/favorite');
  });
});
