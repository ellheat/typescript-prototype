import React from 'react';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import './App.css';

import { RepositoriesTable } from './components/repositoriesTable';

import { useSearch } from './hooks/useSearch';
import { FETCH_STATUS, useRepositories } from './hooks/useRepositories';
import { usePagination } from './hooks/usePagination';


function App() {
  const [{ searchValue }, { handleChangeSearchValue }] = useSearch();
  const [{ page }, { handleChangePage }] = usePagination(searchValue);
  const { status, pagesCount, repositories } = useRepositories(searchValue, page);

  console.log('status', status);

  return (
    <div className="App">
      <TextField id="searchField" label="Search" name="searchField" onChange={handleChangeSearchValue} value={searchValue} />
      { status === FETCH_STATUS.loading && 'Loading...' }
      { status === FETCH_STATUS.success && (
        <>
          <RepositoriesTable repositories={repositories} />
          <Pagination count={pagesCount} color="primary" page={page} onChange={handleChangePage}  />
        </>
      ) }
    </div>
  );
}

export default App;
