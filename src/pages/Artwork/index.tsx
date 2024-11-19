import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {
  ArtworkContainer,
  ArtworkContent,
  Text,
  HighlightedText,
  Image,
  ImageContainer,
  InfoContainer,
  Info,
  OverviewContainer,
  Overview,
  FavoriteButtonContainer,
  Skeleton,
} from './Artwork.styles';
import notExistentImageIcon from 'assets/images/not-existent-image-icon.svg';
import { fetchArtwork } from 'api';
import FavoriteButton from 'components/FavoriteButton';

const Artwork: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [artworkData, setArtworkData] = useState<any>(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await fetchArtwork(Number(id));
        setArtworkData(data);
        setLoading(false);
      };
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Header />
      <ArtworkContainer>
        <ArtworkContent>
          {loading ? (
            <>
              <ImageContainer>
                <Skeleton width="350px" height="570px" />
              </ImageContainer>
              <InfoContainer>
                <Info>
                  <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                  <Skeleton
                    width="clamp(150px, 40vw, 400px)"
                    height="2rem"
                    marginTop="2rem"
                  />
                  <Skeleton
                    width="clamp(150px, 40vw, 400px)"
                    height="2rem"
                    marginTop="1rem"
                  />
                </Info>
                <Overview>
                  <Skeleton width="30%" height="2rem" />
                  <OverviewContainer>
                    <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                    <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                    <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                    <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                    <Skeleton width="clamp(150px, 40vw, 400px)" height="2rem" />
                  </OverviewContainer>
                </Overview>
              </InfoContainer>
            </>
          ) : (
            <>
              <ImageContainer>
                <Image
                  src={
                    artworkData.image
                      ? URL.createObjectURL(artworkData.image)
                      : notExistentImageIcon
                  }
                  alt={artworkData.title}
                />
                <FavoriteButtonContainer>
                  <FavoriteButton artworkId={artworkData.id} />
                </FavoriteButtonContainer>
              </ImageContainer>
              <InfoContainer>
                <Info>
                  <Text size={'2rem'} weight={400} color={'#393939'}>
                    {artworkData.title}
                  </Text>
                  <Text
                    size={'1.5rem'}
                    weight={400}
                    color={'#E0A449'}
                    marginTop={'2rem'}
                  >
                    {artworkData.artist_title}
                  </Text>
                  <Text
                    size={'1rem'}
                    weight={700}
                    color={'#393939'}
                    marginTop={'1rem'}
                  >
                    {artworkData.date_range}
                  </Text>
                </Info>
                <Overview>
                  <Text size={'2rem'} weight={400} color={'#393939'}>
                    Overview
                  </Text>
                  <OverviewContainer>
                    <Text size={'1rem'} weight={400} color={'#393939'}>
                      <HighlightedText color={'#E0A449'}>
                        Artist nacionality:{' '}
                      </HighlightedText>
                      {artworkData.place_of_origin}
                    </Text>
                    <Text size={'1rem'} weight={400} color={'#393939'}>
                      <HighlightedText color={'#E0A449'}>
                        Dimensions: Sheet:{' '}
                      </HighlightedText>
                      {artworkData.dimensions}
                    </Text>
                    <Text size={'1rem'} weight={400} color={'#393939'}>
                      <HighlightedText color={'#E0A449'}>
                        Credit Line:{' '}
                      </HighlightedText>
                      {artworkData.credit_line}
                    </Text>
                    <Text size={'1rem'} weight={400} color={'#393939'}>
                      <HighlightedText color={'#E0A449'}>
                        Repository:{' '}
                      </HighlightedText>
                      {artworkData.department_title}
                    </Text>
                    <Text size={'1rem'} weight={400} color={'#393939'}>
                      {artworkData.is_public_domain ? 'Public' : 'Private'}
                    </Text>
                  </OverviewContainer>
                </Overview>
              </InfoContainer>
            </>
          )}
        </ArtworkContent>
      </ArtworkContainer>
      <Footer />
    </>
  );
};

export default Artwork;