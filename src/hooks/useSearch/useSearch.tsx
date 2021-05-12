import { useState, ChangeEvent } from 'react';

export type HandleChangeValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
type UseSearchResult = [
  { searchValue: string },
  { handleChangeSearchValue: HandleChangeValue}
]

export const useSearch: () => UseSearchResult = () => {
  const [value, setValue] = useState<string>('');

  const handleChangeValue: HandleChangeValue = (event) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
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
