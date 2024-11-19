import React from 'react';
import { useForm } from 'react-hook-form';
import {
  SearchBarContainer,
  SearchBarContent,
  SearchingTextInput,
  Button,
  ErrorContainer,
  ErrorMessage,
  ErrorIcon,
} from './SearchBar.styles';
import searchIcon from 'assets/images/search-icon.svg';
import errorIcon from 'assets/images/error-icon.svg';

export interface SearchFormData {
  query: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T => {
  let timer: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  }) as T;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>();

  const debouncedSearch = debounce(onSearch, 1000);

  const onSubmit = (data: SearchFormData) => {
    debouncedSearch(data.query.trim());
  };

  const validateQuery = (query: string) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length === 0) {
      return 'Search text cannot be empty';
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(trimmedQuery)) {
      return 'Search query can only contain letters, numbers, and spaces';
    }
    return true;
  };

  return (
    <>
      <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
        <SearchBarContent>
          <SearchingTextInput
            type="text"
            placeholder="Search art, artist, work..."
            {...register('query', {
              required: 'Search text cannot be empty',
              minLength: {
                value: 3,
                message: 'Search text should be at least 3 characters long',
              },
              maxLength: {
                value: 50,
                message: 'Search text cannot exceed 50 characters',
              },
              validate: validateQuery,
            })}
          />
          <Button
            src={searchIcon}
            alt="search icon"
            onClick={handleSubmit(onSubmit)}
          />
        </SearchBarContent>
      </SearchBarContainer>
      {errors?.query && (
        <ErrorContainer>
          <ErrorIcon src={errorIcon} alt="Error icon" />
          <ErrorMessage>{errors.query.message}</ErrorMessage>
        </ErrorContainer>
      )}
    </>
  );
};

export default SearchBar;