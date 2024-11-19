import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
    margin-left: auto;
    background-color: transparent;
    border: none;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0022ff;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  min-width: 160px;
    border-radius: 1rem;
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
`;