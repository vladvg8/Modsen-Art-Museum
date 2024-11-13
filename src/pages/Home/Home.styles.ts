import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    background: #FAFAFA;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
    
  @media (max-width: 1300px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
    margin-top: 120px;
    margin-bottom: 0px;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    width: fit-content;
    max-width: 684px;
    color: #393939;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-top: 80px;
    }
`;

export const HighlightedText = styled.span<{ color: string }>`
    color: ${({color}) => color};
`;