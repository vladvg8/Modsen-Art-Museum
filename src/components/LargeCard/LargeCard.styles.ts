import styled from 'styled-components';

export const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: clamp(250px, 30vw, 387px);
  height: clamp(307px, 33vw, 444px);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 80px;
  width: calc(100% - clamp(8px, 1vw, 16px) * 2 - 80px - clamp(50px, 5vw, 59px));
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

export const Card = styled.div`
  border: 1px solid #f0f1f1;
  background: white;
  padding: 1rem 1.5rem;
  top: 100%;
  width: calc(clamp(250px, 30vw, 334px) - 3rem);
  margin-top: -40px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;