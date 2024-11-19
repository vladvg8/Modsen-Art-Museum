import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const CardLoaderContainer = styled.div`
  width: clamp(250px, 30vw, 387px);
  height: calc(clamp(307px, 33vw, 444px) + 75px);
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ShimmerEffect = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f6f6f6 50%, #e0e0e0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
`;
