import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 127px;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;

  @media (max-width: 1300px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  @media (max-width: 768px) {
    width: 160px;
  }
`;
