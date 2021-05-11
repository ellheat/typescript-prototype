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
      <ul className="pagination">
        <li className="page-item" onClick={handlePrevPage}>
          <a className="page-link" href="#" aria-label="Previous">
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          {page}
        </li>
        <li className="page-item" onClick={handleNextPage}>
          <a className="page-link" href="#" aria-label="Next">
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  )
};
