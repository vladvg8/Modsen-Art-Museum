import React, { useState } from 'react';
import {
  Card,
  Image,
  InfoContainer,
  TitleContainer,
  Title,
  Author,
  Status,
} from './SmallCard.styles';
import FavoriteButton from '../FavoriteButton';
import notExistentImageIcon from 'assets/images/not-existent-image-icon.svg';
import { CardProps } from 'constants/CardProps';
import { useNavigate } from 'react-router-dom';

const SmallCard: React.FC<CardProps> = ({
  artworkId,
  title,
  author,
  image,
  status,
}) => {
  const [imageSrc, setImageSrc] = useState(image);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/art?id=${artworkId}`);
  };

  return (
    <Card>
      <Image
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(notExistentImageIcon)}
        onClick={() => handleCardClick()}
      />
      <InfoContainer onClick={() => handleCardClick()}>
        <TitleContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </TitleContainer>
        <Status>{status}</Status>
      </InfoContainer>
      <FavoriteButton artworkId={artworkId} />
    </Card>
  );
};

export default SmallCard;
