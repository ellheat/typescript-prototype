import React, { createContext } from 'react';

import App from './App';

import { useRepositories } from './hooks/useRepositories';

type FetchRepositoriesType = (query?: string) => void;

interface RepositoriesContextInterface {
  repositories: readonly object[] | [];
  fetchRepositories: FetchRepositoriesType;
}

export const RepositoriesContext = createContext<RepositoriesContextInterface>({
  repositories: [],
  fetchRepositories: () => {},
});

export const AppContainer = () => {
  const [
    {
      repositories,
    },
    {
      fetchRepositories,
    }] = useRepositories();

  const context = {
    repositories,
    fetchRepositories,
  }

  return (
    // @ts-ignore
    <RepositoriesContext.Provider value={context}>
      <App />
    </RepositoriesContext.Provider>
  )
}
