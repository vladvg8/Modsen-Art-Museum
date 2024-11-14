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
import notExistentImageIcon from './../../assets/images/not-existent-image-icon.svg';

export interface SmallCardProps {
  artworkId: number;
  title: string;
  author: string;
  image: string;
  status: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
  artworkId,
  title,
  author,
  image,
  status,
}) => {
  const [imageSrc, setImageSrc] = useState(image);

  return (
    <Card>
      <Image
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(notExistentImageIcon)}
      />
      <InfoContainer>
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
