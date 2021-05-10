import React, { createContext } from 'react';

import App from './App';

import { IList, useRepositories } from './hooks/useRepositories';

type FetchRepositoriesType = (query?: string) => void;

interface RepositoriesContextInterface {
  repositories: IList;
  fetchRepositories: FetchRepositoriesType;
}

export const RepositoriesContext = createContext<RepositoriesContextInterface>({
// @ts-ignore
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
