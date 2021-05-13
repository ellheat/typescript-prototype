import { ChangeEvent, useEffect, useState } from 'react';

type HandleChangePageProps = (event: ChangeEvent<unknown>, page: number) => void
type UsePaginationResult = [
  {
    page: number
  },
  {
    handleChangePage: HandleChangePageProps,
  }
]

export const usePagination: (searchValue: string) => UsePaginationResult = (searchValue) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const handleChangePage: HandleChangePageProps = (event, page) => {
    setPage(page);
  }

  return [
    {
      page
    },
    {
      handleChangePage,
    },
  ]
};
