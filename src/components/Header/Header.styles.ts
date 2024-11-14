import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: clamp(80px, 7vw, 127px);
  background: linear-gradient(
    to right,
    #343333,
    #343333 25%,
    #484848 75%,
    #282828 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
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

export const NavigationLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const NavigationTitle = styled.p`
  color: white;
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 16px);
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
  gap: 1.5rem;
`;
