import React from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';

import { RepositoriesTable } from './components/repositoriesTable';

import { useSearch } from './hooks/useSearch';
import { FETCH_STATUS, useRepositories } from './hooks/useRepositories';


function App() {
  const [{ searchValue }, { handleChangeSearchValue }] = useSearch();
  const { status, repositories } = useRepositories(searchValue, 1);

  return (
    <div className="App">
      <TextField id="searchField" label="Search" name="searchField" onChange={handleChangeSearchValue} value={searchValue} />
      { status === FETCH_STATUS.loading && 'Loading...' }
      { status === FETCH_STATUS.success && <RepositoriesTable repositories={repositories} /> }
    </div>
  );
}

export default App;
