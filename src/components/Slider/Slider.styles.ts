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