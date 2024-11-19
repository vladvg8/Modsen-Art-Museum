import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterContent, Logo } from './Footer.styles';
import museumLogoLight from 'assets/images/museum-logo-light.svg';
import modsenLogo from 'assets/images/modsen-logo.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={museumLogoLight} alt="Modsen Art Museum light logo" />
        <Link
          to="https://www.modsen-software.com"
          style={{ textDecoration: 'none' }}
          target="_blank"
        >
          <Logo src={modsenLogo} alt="Modsen logo" />
        </Link>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;