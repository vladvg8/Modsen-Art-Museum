import React, { useEffect, useState } from 'react';
import Header from './../../components/Header';
import Footer from '../../components/Footer';
import {
  FavoritesContainer,
  FavoritesContent,
  Title,
  Bookmark,
  FavoriteWorksContainer,
  FavoriteWorks,
  Text,
  WorksInfo,
} from './Favorites.styles';
import bookmarkIcon from './../../assets/images/bookmark-icon.svg';
import SmallCard from '../../components/SmallCard';
import useLocalStorageIds from '../../hooks/useLocalStorageIds';
import { fetchShortArtworkInfo } from '../../api';
import { CardProps } from '../../constants/CardProps';

const Favorites: React.FC = () => {
  const { ids } = useLocalStorageIds('favoriteArtworks');
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFavoriteArtworks = async () => {
      setLoading(true);
      try {
        const fetchedCards = await Promise.all(
          ids.map((id: number) => fetchShortArtworkInfo(id))
        );
        setCards(fetchedCards.filter(Boolean) as CardProps[]);
      } catch (error) {
        console.error('Error fetching favorite artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    if (ids.length > 0) {
      loadFavoriteArtworks();
    }
  }, [ids]);

  return (
    <>
      <Header isHome={false} />
      <FavoritesContainer>
        <FavoritesContent>
          <Title marginTop={'clamp(60px, 10vw, 120px)'} color={'#393939'}>
            Here are your
          </Title>
          <Title marginTop={'0'} color={'#F17900'}>
            <Bookmark src={bookmarkIcon} />
            Favorites
          </Title>
          <FavoriteWorksContainer>
            <WorksInfo>
              <Text color={'#E0A449'} size={'1rem'} weight={400}>
                Saved by you
              </Text>
              <Text color={'#393939'} size={'2rem'} weight={400}>
                Your favorites list
              </Text>
            </WorksInfo>
            {loading ? (
              <Text color={'#393939'} size={'1.5rem'} weight={400} marginTop={'1rem'}>
                Loading...
              </Text>
            ) : cards.length > 0 ? (
              <FavoriteWorks>
                {cards.map((card) => (
                  <SmallCard
                    key={card.artworkId}
                    artworkId={card.artworkId}
                    title={card.title}
                    author={card.author}
                    image={card.image}
                    status={card.status}
                  />
                ))}
              </FavoriteWorks>
            ) : (
              <Text
                color={'#393939'}
                size={'1.5rem'}
                weight={400}
                marginTop={'clamp(20px, 2vw, 40px)'}
              >
                No favorites found
              </Text>
            )}
          </FavoriteWorksContainer>
        </FavoritesContent>
      </FavoritesContainer>
      <Footer />
    </>
  );
};

export default Favorites;
