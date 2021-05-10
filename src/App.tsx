import React, { useContext } from 'react';
import './App.css';


import { RepositoriesContext } from './AppContainer';
import { List } from './components/list';
import { SearchField } from './components/searchField';
import { useSearch } from './hooks/useSearch';

function App() {
  const { repositories, isLoading } = useContext(RepositoriesContext);
  const [{ searchValue }, { handleChangeSearchValue }] = useSearch();

  return (
    <div className="App">
      <SearchField id="searchField" name="searchField" onChange={handleChangeSearchValue} label="Search" value={searchValue} />
      {
        !isLoading ?
          // @ts-ignore
          <List repositories={repositories} />
        :
          'Loading...'
      }
    </div>
  );
}

export default App;
