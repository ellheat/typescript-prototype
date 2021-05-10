import { useCallback, useState} from "react";

import { URL } from './useRepositories.constants';
import { IList } from './useRepositories.constants';

interface IRepositories {
  repositories: IList,
}

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<IRepositories>();

  const fetchRepositories = useCallback(query => {
    fetch(`${URL}?q=${query}`)
      .then(response => response.json())
      .then(parsedResponse => setRepositories(parsedResponse.items));
  }, []);

  return [
    {
      repositories
    },
    {
      fetchRepositories
    },
  ]
};
