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
import FavoriteButton from '../FavoriteButton';
import notExistentImageIcon from '../../assets/images/not-existent-image-icon.svg';
import { CardProps } from '../../constants/CardProps';

const LargeCard: React.FC<CardProps> = ({
  artworkId,
  title,
  author,
  image,
  status
}) => {
  const [imageSrc, setImageSrc] = useState(image);

  useEffect(() => {
    setImageSrc(image)
  }, [image]);

  return (
    <LargeCardContainer>
      <Image
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(notExistentImageIcon)}
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
