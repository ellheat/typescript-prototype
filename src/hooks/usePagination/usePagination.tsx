import { SyntheticEvent, useEffect, useState } from 'react';

export type HandleChangePageOnClick = (event: SyntheticEvent) => void
type HandleChangePage = (page: number) => void
type UsePaginationResult = [
  {
    page: number
  },
  {
    handlePrevPage: HandleChangePageOnClick,
    handleNextPage: HandleChangePageOnClick
  }
]

export const usePagination: (searchValue: string) => UsePaginationResult = (searchValue) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const handleChangePage: HandleChangePage = (page) => {
    setPage(page);
  }

  const handlePrevPage: HandleChangePageOnClick = () => handleChangePage(page - 1);

  const handleNextPage: HandleChangePageOnClick = () => handleChangePage(page + 1);

  return [
    {
      page
    },
    {
      handlePrevPage,
      handleNextPage,
    },
  ]
};
