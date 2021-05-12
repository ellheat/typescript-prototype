import React from 'react';

import { HandleChangePageOnClick } from '../../hooks/usePagination/usePagination';

type PaginationProps = {
  page: number,
  handlePrevPage: HandleChangePageOnClick,
  handleNextPage: HandleChangePageOnClick,
}

export const Pagination = ({ page, handlePrevPage, handleNextPage }: PaginationProps) => {
  return (
    <nav aria-label="Table pagination">
      <ul>
        <li onClick={handlePrevPage}>
          <div aria-label="Previous">
            <span>Previous</span>
          </div>
        </li>
        <li>
          {page}
        </li>
        <li onClick={handleNextPage}>
          <div aria-label="Next">
            <span>Next</span>
          </div>
        </li>
      </ul>
    </nav>
  )
};
