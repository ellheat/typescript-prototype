import { useState, useContext, FormEvent } from 'react';
import { RepositoriesContext } from '../../AppContainer';

export type HandleChangeValue = (event: FormEvent<HTMLInputElement>) => void
type UseSearchResult = [
  { searchValue: string },
  { handleChangeSearchValue: HandleChangeValue}
]

export const useSearch: () => UseSearchResult = () => {
  const { fetchRepositories } = useContext(RepositoriesContext);
  const [value, setValue] = useState<string>('');

  const handleChangeValue: HandleChangeValue = (event) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    fetchRepositories(newValue);
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
