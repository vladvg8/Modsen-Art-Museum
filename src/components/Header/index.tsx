import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NavigationLinksContainer,
  NavigationLink,
  NavigationTitle,
  BurgerIcon,
  BurgerMenu,
} from './Header.styles';
import museumLogoDark from 'assets/images/museum-logo-dark.svg';
import headerFavoriteIcon from 'assets/images/header-favorite-icon.svg';
import headerHomeIcon from 'assets/images/header-home-icon.svg';
import useOutsideClick from 'hooks/useOutsideClick';

export interface HeaderProps {
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useOutsideClick(menuRef, () => setIsMenuOpen(false), [menuButtonRef]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo src={museumLogoDark} alt="Modsen Art Museum dark logo" />
          <NavigationLinksContainer>
            {!isHome && (
              <Link to="/" style={{ textDecoration: 'none' }}>
                <NavigationLink>
                  <img src={headerHomeIcon} alt="favorite icon" />
                  <NavigationTitle>Home</NavigationTitle>
                </NavigationLink>
              </Link>
            )}
            <Link to="/favorite" style={{ textDecoration: 'none' }}>
              <NavigationLink>
                <img src={headerFavoriteIcon} alt="favorite icon" />
                <NavigationTitle>Your favorite</NavigationTitle>
              </NavigationLink>
            </Link>
          </NavigationLinksContainer>

          <BurgerIcon onClick={toggleMenu} ref={menuButtonRef}>
            &#9776;
          </BurgerIcon>

          <BurgerMenu ref={menuRef} isOpen={isMenuOpen}>
            {!isHome && (
              <Link to="/" style={{ textDecoration: 'none' }}>
                <NavigationLink>
                  <img src={headerHomeIcon} alt="favorite icon" />
                  <NavigationTitle>Home</NavigationTitle>
                </NavigationLink>
              </Link>
            )}
            <Link to="/favorite" style={{ textDecoration: 'none' }}>
              <NavigationLink>
                <img src={headerFavoriteIcon} alt="favorite icon" />
                <NavigationTitle>Your favorite</NavigationTitle>
              </NavigationLink>
            </Link>
          </BurgerMenu>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;