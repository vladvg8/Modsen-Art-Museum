import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    background: #3939390D;
    border-radius: 1rem;
    width: 100%;
    max-width: 762px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4.5rem;
    margin-bottom: 7.5rem;
    
    @media (max-width: 768px) {
        height: 50px;
        margin-bottom: 106px;
    }
`;

export const SearchBarContent = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const SearchingTextInput = styled.input`
    border: 0;
    background: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    outline: none;
    flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: fit-content;
    height: fit-content;
`;