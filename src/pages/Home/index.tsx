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
                artworkId={77544}
                title={'Mona Lisa'}
                author={'Timothy Cole'}
                image={
                  'https://www.artic.edu/iiif/2/baea7300-2d7c-365d-c8fb-3e19e487cc1d/full/80,/0/default.jpg'
                }
                status={'Private'}
              />
              <SmallCard
                artworkId={14770}
                title={'Lady Davina Lytton'}
                author={'Arthur Ambrose McEvoy'}
                image={
                  'https://www.artic.edu/iiif/2/57378127-0add-b6c8-863c-a2a087b839d7/full/80,/0/default.jpg'
                }
                status={'Private'}
              />
              <SmallCard
                artworkId={16568}
                title={'Water Lilies'}
                author={'Claude Monet'}
                image={
                  'https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/80,/0/default.jpg'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={80530}
                title={'Virgin and Child with an Angel'}
                author={'Sandro Botticelli'}
                image={
                  'https://www.artic.edu/iiif/2/b59cc3e9-a7c0-5aa1-1a22-bb472bb2e6d4/full/80,/0/default.jpg'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={27992}
                title={'A Sunday on La Grande Jatte — 1884'}
                author={'Georges Seurat'}
                image={
                  'https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/80,/0/default.jpg'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={27943}
                title={'Mahana no atua (Day of the God)'}
                author={'Paul Gauguin'}
                image={
                  'https://www.artic.edu/iiif/2/a4bef587-48a4-d186-813d-f297441b1ab3/full/80,/0/default.jpg'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={109585}
                title={'Venus with Seashell'}
                author={'Raoul Dufy'}
                image={
                  'https://www.artic.edu/iiif/2/133c982d-14df-386c-a1c1-c977fdce6f0b/full/80,/0/default.jpg'
                }
                status={'Private'}
              />
              <SmallCard
                artworkId={65821}
                title={'Composition (No. 1) Gray-Red'}
                author={'Piet Mondrian'}
                image={
                  'https://www.artic.edu/iiif/2/254c654f-354a-0f4f-28b5-8eb01a02e95c/full/80,/0/default.jpg'
                }
                status={'Public'}
              />
              <SmallCard
                artworkId={111377}
                title={"For Sunday's Dinner"}
                author={'William Michael Harnett'}
                image={
                  'https://www.artic.edu/iiif/2/3cea045a-92d6-36cf-1508-2c99ea740218/full/80,/0/default.jpg'
                }
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
