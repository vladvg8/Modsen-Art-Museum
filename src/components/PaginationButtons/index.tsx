import React from 'react';
import { Button, PaginationButtonsContainer } from './PaginationButtons.styles';
import nextButtonIcon from 'assets/images/next-button-icon.svg';
import preButtonIcon from 'assets/images/pre-button-icon.svg';

export interface PaginationButtonsProps {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) => {
  const getDisplayedPages = () => {
    const pages = [];
    let start, end;
    if (currentPage <= 3) {
      start = 1;
      end = Math.min(5, numberOfPages);
    } else if (currentPage > numberOfPages - 3) {
      start = Math.max(numberOfPages - 4, 1);
      end = numberOfPages;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <PaginationButtonsContainer>
      {currentPage > 1 && (
        <Button
          isActive={false}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <img src={preButtonIcon} alt={'preButtonIcon'} />
        </Button>
      )}

      {displayedPages.map((page) => (
        <Button
          key={page}
          isActive={currentPage === page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}

      {currentPage < numberOfPages && (
        <Button
          isActive={false}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <img src={nextButtonIcon} alt={'nextButtonIcon'} />
        </Button>
      )}
    </PaginationButtonsContainer>
  );
};

export default PaginationButtons;