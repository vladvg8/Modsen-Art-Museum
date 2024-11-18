import React from 'react';
import { CardProps } from '../../constants/CardProps';
import { SliderContainer } from './Slider.styles';
import LargeCard from '../LargeCard';
import CardLoader from './../CardLoader';

export interface SliderProps {
  cards: CardProps[];
  loading: boolean;
}

const Slider: React.FC<SliderProps> = ({ cards, loading }) => {
  return (
    <SliderContainer>
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <CardLoader key={index} />
          ))
        : cards.map((card) => (
            <LargeCard
              key={card.artworkId}
              artworkId={card.artworkId}
              title={card.title}
              author={card.author}
              image={card.image}
              status={card.status}
            />
          ))}
    </SliderContainer>
  );
};

export default Slider;
