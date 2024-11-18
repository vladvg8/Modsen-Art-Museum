import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
  margin-top: clamp(20px, 2vw, 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const Text = styled.p`
  color: #393939;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: clamp(20px, 2vw, 40px);
`;