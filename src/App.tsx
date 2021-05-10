import React, { useContext, useEffect } from 'react';
import './App.css';


import { RepositoriesContext } from './AppContainer';
import { List } from "./components/list/list";

function App() {
  const { repositories, fetchRepositories } = useContext(RepositoriesContext);
  console.log('repositories', repositories);

  useEffect(() => {
    fetchRepositories('q');
  }, [fetchRepositories]);

  return (
    <div className="App">
      {
        // @ts-ignore
        <List repositories={repositories} />
      }
    </div>
  );
}

export default App;
