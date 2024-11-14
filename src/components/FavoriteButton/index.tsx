import React, { useState } from 'react';
import { FavoriteButtonContent, Bookmark } from './FavoriteButton.styles';
import inactiveBookmarkIcon from './../../assets/images/inactive-bookmark-icon.svg';

export interface FavoriteButtonProps {
  artworkId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artworkId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <FavoriteButtonContent
      isFavorite={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <Bookmark src={inactiveBookmarkIcon} alt="Bookmark" />
    </FavoriteButtonContent>
  );
};

export default FavoriteButton;
