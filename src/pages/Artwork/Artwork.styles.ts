import styled from 'styled-components';

export const ArtworkContainer = styled.div`
  width: 100%;
  background: #fafafa;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ArtworkContent = styled.div`
  margin-top: clamp(60px, 10vw, 120px);
  margin-bottom: clamp(60px, 10vw, 120px);
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-radius: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 497px;
  max-height: 570px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  height: auto;
  max-height: 570px;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 1rem;
    height: auto;
  }
`;

export const Text = styled.p<{
  color: string;
  size: string;
  weight: number;
  marginTop?: string;
}>`
  margin: 0;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

export const HighlightedText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Skeleton = styled.div<{
  width: string;
  height: string;
  marginTop?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  background: linear-gradient(
    90deg,
    rgba(200, 200, 200, 0.1) 25%,
    rgba(200, 200, 200, 0.3) 50%,
    rgba(200, 200, 200, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;