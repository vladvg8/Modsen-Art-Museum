import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  width: calc(clamp(360px, 28.5vw, 416px) - 2rem);
  height: clamp(100px, 8.5vw, 130px);
  background: #ffffff;
  border: 1px solid #f0f1f1;
  font-family: 'Inter', sans-serif;
  gap: clamp(8px, 1vw, 16px);
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 80px;
  width: calc(100% - clamp(8px, 1vw, 16px) * 2 - 80px - clamp(50px, 5vw, 59px));
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #393939;
`;

export const Author = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  color: #e0a449;
`;

export const Status = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  color: #393939;
`;
