import React, { useState } from 'react';
import {LargeCardContainer, Image, InfoContainer, Title, Author, Status, TitleContainer, Card} from './LargeCard.styles';
import FavoriteButton from '../FavoriteButton';
import notExistentImageIcon from '../../assets/images/not-existent-image-icon.svg';

export interface LargeCardProps {
  artworkId: number;
  title: string;
  author: string;
  image: string;
  status: string;
}

const LargeCard: React.FC<LargeCardProps> = ({
                                               artworkId,
                                               title,
                                               author,
                                               image,
                                               status,
                                             }) => {
  const [imageSrc, setImageSrc] = useState(image);

  return (
    <LargeCardContainer>
      <Image src={imageSrc}
             alt={title}
             onError={() => setImageSrc(notExistentImageIcon)}/>
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