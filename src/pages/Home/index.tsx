import React from 'react'
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import SearchBar from "./../../components/SearchBar";
import {Title, HomeContainer, HomeContent, HighlightedText} from './Home.styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <Title>Let's Find Some <HighlightedText color={'#F17900'}>Art</HighlightedText> Here!</Title>
          <SearchBar />
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;