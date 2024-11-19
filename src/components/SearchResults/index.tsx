import React, { useEffect, useState } from 'react';
import Slider from './../Slider';
import { CardProps } from '../../constants/CardProps';
import { SearchResultsContainer } from './SearchResults.styles';
import PaginationButtons from '../PaginationButtons';
import { fetchArtworks, fetchShortArtworkInfo } from '../../api';
import SortDropdown from '../SortDropdown';

export interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState<number | null>(null);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('Relevance');

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchArtworks(query, currentPage, 3);
      if (data) {
        setNumberOfPages(data.totalPages);
        const fetchedCards = await Promise.all(
          data.artworksId.map((artwork: { id: number }) =>
            fetchShortArtworkInfo(artwork.id)
          )
        );
        setCards(fetchedCards.filter(Boolean) as CardProps[]);
      }
      setLoading(false);
    })();
  }, [currentPage, query, sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (<SearchResultsContainer>
    {cards.length > 0 && <SortDropdown onSortChange={setSortOption} />}
    <Slider cards={cards} loading={loading} />
    {cards.length > 0 && <PaginationButtons
      numberOfPages={numberOfPages || 1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />}
  </SearchResultsContainer>)
};

export default SearchResults;