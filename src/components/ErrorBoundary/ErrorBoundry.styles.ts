import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorBoundaryContent = styled.div`
  margin-top: clamp(120px, 10vw, 240px);
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
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
  text-align: center;
`;
