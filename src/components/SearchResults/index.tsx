import React, { useEffect, useState } from 'react';
import Slider from './../Slider';
import { CardProps } from '../../constants/CardProps';
import {SearchResultsContainer} from './SearchResults.styles';
import PaginationButtons from '../PaginationButtons';

export interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({query}) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    console.log(currentPage)
  }, [currentPage]);

  const cards: CardProps[] = [
    {artworkId: 233260, title: 'Urban Villa, Berlin, Germany, Perspective', author: 'Stanley Tigerman', image: 'https://www.artic.edu/iiif/2/f2e32bf5-0b47-5bc2-5652-09b31fb141d6/full/800,/0/default.jpg', status: 'Public'},
    {artworkId: 233260, title: 'Urban Villa, Berlin, Germany, Perspective', author: 'Stanley Tigerman', image: 'https://www.artic.edu/iiif/2/f2e32bf5-0b47-5bc2-5652-09b31fb141d6/full/800,/0/default.jpg', status: 'Public'},
    {artworkId: 233260, title: 'Urban Villa, Berlin, Germany, Perspective', author: 'Stanley Tigerman', image: 'https://www.artic.edu/iiif/2/f2e32bf5-0b47-5bc2-5652-09b31fb141d6/full/800,/0/default.jpg', status: 'Public'}
  ];

  return (
    <SearchResultsContainer>
      <Slider cards={cards}/>
      <PaginationButtons numberOfPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SearchResultsContainer>
  );
};

export default SearchResults;
