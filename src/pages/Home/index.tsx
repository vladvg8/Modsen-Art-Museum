import React, { useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SearchBar from 'components/SearchBar';
import SmallCard from 'components/SmallCard';
import SearchResults from 'components/SearchResults';
import {
  Title,
  HomeContainer,
  HomeContent,
  HighlightedText,
  OtherWorksContainer,
  OtherWorksInfo,
  Text,
  OtherWorks,
  SearchResultContainer,
  SearchResultInfo,
} from './Home.styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('Urban');

  return (
    <>
      <Header isHome={true} />
      <HomeContainer>
        <HomeContent>
          <Title>
            Let's Find Some{' '}
            <HighlightedText color={'#F17900'}>Art</HighlightedText> Here!
          </Title>

          <SearchBar onSearch={(query) => setSearchQuery(query)} />

          <SearchResultContainer>
            <SearchResultInfo>
              <Text color={'#E0A449'} size={'1rem'} weight={400}>
                Topics for you
              </Text>
              <Text color={'#393939'} size={'2rem'} weight={400}>
                Our special gallery
              </Text>
            </SearchResultInfo>
            <SearchResults query={searchQuery} />
          </SearchResultContainer>

          <OtherWorksContainer>
            <OtherWorksInfo>
              <Text color={'#E0A449'} size={'1rem'} weight={400}>
                Here some more
              </Text>
              <Text color={'#393939'} size={'2rem'} weight={400}>
                Other works for you
              </Text>
            </OtherWorksInfo>
            <OtherWorks>
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={
                  'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/80,/0/default.png'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={
                  'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/80,/0/default.png'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
              <SmallCard
                artworkId={1}
                title={'Charles V, bust length, holding a sword, facing right'}
                author={'Giovanni Britto'}
                image={'sdasd'}
                status={'Public'}
              />
            </OtherWorks>
          </OtherWorksContainer>
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
