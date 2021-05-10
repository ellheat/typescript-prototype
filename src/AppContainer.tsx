import React, { createContext } from 'react';

import App from './App';

import { IList, useRepositories } from './hooks/useRepositories';

type FetchRepositoriesType = (query?: string) => void;
type IsLoadingType = boolean;

interface RepositoriesContextInterface {
  repositories: IList;
  isLoading: IsLoadingType;
  fetchRepositories: FetchRepositoriesType;
}

export const RepositoriesContext = createContext<RepositoriesContextInterface>({
// @ts-ignore
  repositories: [],
  isLoading: false,
  fetchRepositories: () => {},
});

export const AppContainer = () => {
  const [
    {
      repositories,
      isLoading,
    },
    {
      fetchRepositories,
    }] = useRepositories();

  const context = {
    repositories,
    isLoading,
    fetchRepositories,
  }

  return (
    // @ts-ignore
    <RepositoriesContext.Provider value={context}>
      <App />
    </RepositoriesContext.Provider>
  )
}
