import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 127px;
  background: linear-gradient(
    to right,
    #343333,
    #343333 25%,
    #484848 75%,
    #282828 100%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const HeaderContent = styled.div`
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

export const NavigationLinksContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationLink = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const NavigationTitle = styled.p`
  color: white;
  margin: 0;
  font-family: Inter;
  font-weight: 400;
`;

export const BurgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ffffff;
    
  @media (max-width: 768px) {
    display: block;
  }
`;

export const BurgerMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 1000;
  width: 200px;
  padding: 15px;
  background-color: #282828;
  border-radius: 0 0 0 10px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 25px;
`;
