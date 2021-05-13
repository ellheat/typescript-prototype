import React from 'react';

import { Container, Title, TextFieldComponent, PaginationComponent } from './App.styles';

import { RepositoriesTable } from './components/repositoriesTable';
import { Text } from './components/text';

import { useSearch } from './hooks/useSearch';
import { FETCH_STATUS, useRepositories } from './hooks/useRepositories';
import { usePagination } from './hooks/usePagination';


function App() {
  const [{ searchValue }, { handleChangeSearchValue }] = useSearch();
  const [{ page }, { handleChangePage }] = usePagination(searchValue);
  const { status, pagesCount, repositories } = useRepositories(searchValue, page);

  return (
    <Container>
      <Title>Search Repo from GitHub</Title>
      <TextFieldComponent id="searchField" label="Search" name="searchField" onChange={handleChangeSearchValue} value={searchValue} />
      { status === FETCH_STATUS.idle && <Text>Type to find repo</Text> }
      { status === FETCH_STATUS.loading && <Text>Loading...</Text> }
      { status === FETCH_STATUS.success && (
        <>
          <RepositoriesTable repositories={repositories} />
          <PaginationComponent count={pagesCount} color="primary" page={page} onChange={handleChangePage}  />
        </>
      ) }
      { status === FETCH_STATUS.error && <Text>Something went wrong</Text> }
    </Container>
  );
}

export default App;
