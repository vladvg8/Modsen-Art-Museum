import React, { useEffect, useState } from 'react';
import {
  LargeCardContainer,
  Image,
  InfoContainer,
  Title,
  Author,
  Status,
  TitleContainer,
  Card,
} from './LargeCard.styles';
import FavoriteButton from 'components/FavoriteButton';
import notExistentImageIcon from 'assets/images/not-existent-image-icon.svg';
import { CardProps } from 'constants/CardProps';
import { useNavigate } from 'react-router-dom';

const LargeCard: React.FC<CardProps> = ({
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

  useEffect(() => {
    setImageSrc(image ?? notExistentImageIcon);
  }, [image]);

  return (
    <LargeCardContainer>
      <Image
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(notExistentImageIcon)}
        onClick={handleCardClick}
      />
      <Card>
        <InfoContainer>
          <TitleContainer>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </TitleContainer>
          <Status>{status}</Status>
        </InfoContainer>
        <FavoriteButton artworkId={artworkId} />
      </Card>
    </LargeCardContainer>
  );
};

export default LargeCard;
