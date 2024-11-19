import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: clamp(80px, 7vw, 127px);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  width: clamp(160px, 15vw, 206px);

  @media (max-width: 768px) {
    width: 160px;
  }
`;
