import styled from 'styled-components';

export const PaginationButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.625rem;
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: fit-content;
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 0;
  font-size: 1.125rem;
  font-family: 'LexendDeca', sans-serif;
  font-weight: ${({ isActive }) => (isActive ? '600' : '300')};
  background: ${({ isActive }) => (isActive ? '#F17900' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : '#393939')};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
