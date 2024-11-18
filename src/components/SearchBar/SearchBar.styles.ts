import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  background: #3939390d;
  border-radius: 1rem;
  width: 100%;
  max-width: 762px;
  height: clamp(50px, 5vw, 64px);
  display: flex;
  align-items: center;
  margin-top: clamp(50px, 5vw, 72px);
`;

export const SearchBarContent = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SearchingTextInput = styled.input`
  border: 0;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  outline: none;
  flex-grow: 1;
`;

export const Button = styled.img`
  cursor: pointer;
`;

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
`;

export const ErrorIcon = styled.img`
    width: 1.2rem;
    height: 1.2rem;
`;

export const ErrorMessage = styled.p`
    font-size: 1rem;
    color: #EF5350;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;