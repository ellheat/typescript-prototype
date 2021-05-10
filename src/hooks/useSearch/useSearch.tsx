import { useState, FormEvent, useContext } from "react";
import { RepositoriesContext } from '../../AppContainer';

export const useSearch = () => {
  const { fetchRepositories } = useContext(RepositoriesContext);
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (event: FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    fetchRepositories(newValue)
  };

  return [
    {
      searchValue: value
    },
    {
      handleChangeSearchValue: handleChangeValue
    },
  ]
};
