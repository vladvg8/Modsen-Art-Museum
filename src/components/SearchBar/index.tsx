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

  const onSubmit = async (data: SearchFormData) => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${data.query}`
    );
    if (response.body) {
      const reader = await response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let result = '';
      let done = false;
      while (!done) {
        const { value, done: streamdone } = await reader.read();
        done = streamdone;
        if (value) {
          result += decoder.decode(value, { stream: !done });
        }
      }
      console.log(JSON.parse(result)['data']);
    }
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
