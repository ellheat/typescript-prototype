import { useState } from 'react';

import { URL, LIMIT, IRepository } from './useRepositories.constants';

export type FetchRepositoriesType = (query: string, page?: number) => void
type UseRepositoriesResult = [
  { repositories: IRepository[], isLoading: boolean },
  { fetchRepositories: FetchRepositoriesType}
]

export const useRepositories: () => UseRepositoriesResult = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRepositories: FetchRepositoriesType = (query, page= 1) => {
    setIsLoading(true);
    fetch(`${URL}?q=${query}&page=${page}&per_page=${LIMIT}`)
      .then(response => response.json())
      .then(parsedResponse => {
        setRepositories(parsedResponse.items)
        setIsLoading(false)
      });
  };

  return [
    {
      repositories,
      isLoading
    },
    {
      fetchRepositories
    },
  ]
};
