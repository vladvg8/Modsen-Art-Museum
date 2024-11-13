import React from 'react';
import {SearchBarContainer, SearchBarContent, SearchingTextInput, ButtonsContainer} from "./SearchBar.styles";
import filterIcon from './../../assets/images/filter-icon.svg';
import searchIcon from './../../assets/images/search-icon.svg';

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchBarContent>
        <SearchingTextInput type="text" placeholder="Search art, artist, work..."/>
        <ButtonsContainer>
          <img src={searchIcon} alt=""/>
          <img src={filterIcon} alt=""/>
        </ButtonsContainer>
      </SearchBarContent>
    </SearchBarContainer>
  );
};

export default SearchBar;