import React from 'react';
import { CardProps } from '../../constants/CardProps';
import { SliderContainer } from './Slider.styles';
import LargeCard from '../LargeCard';

export interface SliderProps {
  cards: CardProps[];
}

const Slider: React.FC<SliderProps> = ({ cards }) => {
  return (
    <SliderContainer>
      {cards.map((card) => (
        <LargeCard
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
