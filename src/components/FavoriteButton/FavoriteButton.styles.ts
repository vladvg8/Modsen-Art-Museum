import styled from 'styled-components';

export const FavoriteButtonContent = styled.div<{ isFavorite: boolean }>`
  width: clamp(50px, 5vw, 59px);
  height: clamp(50px, 5vw, 59px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${({ isFavorite }) =>
    isFavorite ? 'rgb(251,215,178, 30%)' : '#F9F9F9'};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease;
  border-radius: 100%;
`;

export const Bookmark = styled.img`
  width: clamp(20px, 2vw, 24px);
  height: clamp(20px, 2vw, 24px);
  user-select: none;
`;