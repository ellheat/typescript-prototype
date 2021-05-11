import React, { useContext } from 'react';
import './App.css';

import { RepositoriesContext } from './AppContainer';

import { List } from './components/list';
import { SearchField } from './components/searchField';
import { Pagination } from './components/pagination';

import { useSearch } from './hooks/useSearch';
import { usePagination } from './hooks/usePagination';


function App() {
  const { repositories, isLoading } = useContext(RepositoriesContext);
  const [{ searchValue }, { handleChangeSearchValue }] = useSearch();
  const [{ page }, { handlePrevPage, handleNextPage }] = usePagination(searchValue);

  return (
    <div className="App">
      <SearchField id="searchField" name="searchField" onChange={handleChangeSearchValue} label="Search" value={searchValue} />
      {
        !isLoading ?
          <>
            <List repositories={repositories} />
            <Pagination page={page} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
          </>
        :
          'Loading...'
      }
    </div>
  );
}

export default App;
