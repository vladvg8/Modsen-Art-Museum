import React, { useState, useEffect } from 'react';
import { FavoriteButtonContent, Bookmark } from './FavoriteButton.styles';
import inactiveBookmarkIcon from './../../assets/images/inactive-bookmark-icon.svg';
import useLocalStorageIds from '../../hooks/useLocalStorageIds';

export interface FavoriteButtonProps {
  artworkId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artworkId }) => {
  const { ids, addId, removeId, hasId } = useLocalStorageIds('favoriteArtworks');
  const [isFavorite, setIsFavorite] = useState<boolean>(hasId(artworkId));

  useEffect(() => {
    setIsFavorite(hasId(artworkId));
  }, [artworkId, ids, hasId]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeId(artworkId);
    } else {
      addId(artworkId);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <FavoriteButtonContent isFavorite={isFavorite} onClick={toggleFavorite}>
      <Bookmark src={inactiveBookmarkIcon} alt="Bookmark" />
    </FavoriteButtonContent>
  );
};

export default FavoriteButton;
