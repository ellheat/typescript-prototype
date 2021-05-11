import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { RepositoriesContext } from '../../AppContainer';

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
  const { fetchRepositories } = useContext(RepositoriesContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const handleChangePage: HandleChangePage = (page) => {
    setPage(page);
    fetchRepositories(searchValue, page);
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
