import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  margin-top: clamp(60px, 10vw, 120px);
  margin-bottom: 0;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  max-width: 684px;
  color: #393939;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HighlightedText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

export const OtherWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(60px, 10vw, 120px);
  margin-bottom: clamp(60px, 10vw, 120px);
  width: 100%;
`;

export const OtherWorksInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p<{ color: string; size: number; weight: number }>`
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size} + 'rem';
  font-weight: ${({ weight }) => weight};
`;

export const OtherWorks = styled.div`
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
