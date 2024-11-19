import React from 'react';
import { CardProps } from 'constants/CardProps';
import { SliderContainer, Text } from './Slider.styles';
import LargeCard from 'components/LargeCard';
import CardLoader from 'components/CardLoader';

export interface SliderProps {
  cards: CardProps[];
  loading: boolean;
}

const Slider: React.FC<SliderProps> = ({ cards, loading }) => {
  return loading ? (
    <SliderContainer>
      {Array.from({ length: 3 }).map((_, index) => (
        <CardLoader key={index} />
      ))}
    </SliderContainer>
  ) : cards.length > 0 ? (
    <SliderContainer>
      {cards.map((card) => (
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
  ) : (
    <Text>Nothing found</Text>
  );
};

export default Slider;
