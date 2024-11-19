import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from './SortDropdown.styles';
interface SortDropdownProps {
  onSortChange: (sortOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Relevance');

  const sortOptions = [
    'Relevance',
    'Title',
    'Artist'
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortChange(option);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        Sort by {selectedOption} ▼
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default SortDropdown;
