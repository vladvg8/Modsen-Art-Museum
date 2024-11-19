import styled from 'styled-components';

export const SliderContainer = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.p`
  color: #393939;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: clamp(20px, 2vw, 40px);
  text-align: center;
`;
