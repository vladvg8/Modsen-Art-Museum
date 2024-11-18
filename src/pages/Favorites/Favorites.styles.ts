import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  width: 100%;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoritesContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1<{marginTop: string, color: string}>`
  margin-top: ${({marginTop}) => marginTop};
  margin-bottom: 0;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  max-width: 684px;
  color: ${({color}) => color};
  display: flex;
  align-items: center;
  gap: 5px;
    
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Bookmark = styled.img`
    margin-top: 0.3rem;
    width: clamp(2.5rem, 5vw, 4rem);
    height: clamp(2.5rem, 5vw, 4rem);
`;

export const FavoriteWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(60px, 10vw, 120px);
  margin-bottom: clamp(60px, 10vw, 120px);
  width: 100%;
`;

export const FavoriteWorks = styled.div`
  width: 100%;
  margin-top: clamp(20px, 2vw, 40px);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(clamp(360px, 28.5vw, 416px) - 2rem), 1fr)
  );
  gap: clamp(4px, 1vw, 8px);
  justify-items: center;
  align-items: flex-start;
  max-width: 100%;
  box-sizing: border-box;
`;

export const WorksInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p<{ color: string; size: string; weight: number; marginTop?:string }>`
  margin: 0;
  margin-top: ${({marginTop}) => marginTop ? marginTop : 0};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;