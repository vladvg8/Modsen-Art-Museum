import React, { useEffect, useState } from 'react';
import { FavoriteButtonContent, Bookmark } from './FavoriteButton.styles';
import bookmarkIcon from 'assets/images/bookmark-icon.svg';
import { useLocalStorage } from 'contexts/LocalStorageContext';

export interface FavoriteButtonProps {
  artworkId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artworkId }) => {
  const { ids, addId, removeId } = useLocalStorage();
  const [isFavorite, setIsFavorite] = useState(() => ids.includes(artworkId));

  useEffect(() => {
    setIsFavorite(ids.includes(artworkId));
  }, [ids, artworkId]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeId(artworkId);
    } else {
      addId(artworkId);
    }
  };

  return (
    <FavoriteButtonContent
      isfavorite={isFavorite ? 'true' : 'false'}
      onClick={toggleFavorite}
      role="button"
    >
      <Bookmark src={bookmarkIcon} alt="Bookmark" />
    </FavoriteButtonContent>
  );
};

export default FavoriteButton;
