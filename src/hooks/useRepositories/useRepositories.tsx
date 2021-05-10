import { useCallback, useState} from "react";

import { URL } from './useRepositories.constants';
import { IList } from './useRepositories.constants';

interface IRepositories {
  repositories: IList,
}

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<IRepositories>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRepositories = useCallback(query => {
    setIsLoading(true);
    fetch(`${URL}?q=${query}`)
      .then(response => response.json())
      .then(parsedResponse => {
        setRepositories(parsedResponse.items)
        setIsLoading(false)
      });
  }, []);

  return [
    {
      repositories,
      isLoading
    },
    {
      fetchRepositories
    },
  ]
};
