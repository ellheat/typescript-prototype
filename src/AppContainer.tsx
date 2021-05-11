import React, { createContext } from 'react';

import App from './App';

import { IRepository, useRepositories } from './hooks/useRepositories';
import { FetchRepositoriesType } from './hooks/useRepositories/useRepositories';

type IsLoadingType = boolean;

interface RepositoriesContextInterface {
  repositories: IRepository[];
  isLoading: IsLoadingType;
  fetchRepositories: FetchRepositoriesType;
}

export const RepositoriesContext = createContext<RepositoriesContextInterface>({
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

  const repositoriesContext = {
    repositories,
    isLoading,
    fetchRepositories,
  }

  return (
    <RepositoriesContext.Provider value={repositoriesContext}>
      <App />
    </RepositoriesContext.Provider>
  )
}
