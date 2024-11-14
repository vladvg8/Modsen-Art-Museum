import React from 'react';
import { useForm } from 'react-hook-form';
import {
  SearchBarContainer,
  SearchBarContent,
  SearchingTextInput,
  Button,
} from './SearchBar.styles';
import searchIcon from './../../assets/images/search-icon.svg';

export interface SearchFormData {
  query: string;
}

const SearchBar: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    console.log('Searching for:', data.query);
    reset();
  };

  return (
    <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
      <SearchBarContent>
        <SearchingTextInput
          type="text"
          placeholder="Search art, artist, work..."
          {...register('query')}
        />
        <Button
          src={searchIcon}
          alt="search icon"
          onClick={handleSubmit(onSubmit)}
        />
      </SearchBarContent>
    </SearchBarContainer>
  );
};

export default SearchBar;
