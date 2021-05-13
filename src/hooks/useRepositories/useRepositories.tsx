import { useState, Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { URL, LIMIT } from './useRepositories.constants';

type FetchRepositoriesType = (query: string, page: number, setPagesCount: Dispatch<SetStateAction<number>>) => void
type UseRepositoriesResult = { status: string, pagesCount: number, repositories: [], error: unknown }


const fetchRepositories: FetchRepositoriesType = async (query, page= 1, setPagesCount) => {
  const { data } = await axios.get(`${URL}?q=${query}&page=${page}&per_page=${LIMIT}`);
  setPagesCount(Math.ceil(data.total_count / LIMIT));
  return data.items;
};

export const useRepositories: (query: string, page: number) => UseRepositoriesResult = (query, page) => {
  const [pagesCount, setPagesCount] = useState<number>(1);

  const { status, data, error } = useQuery(
    ['repositories', query, page],
    () => fetchRepositories(query, page, setPagesCount),
    {
      enabled: query !== '',
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return {
    status,
    pagesCount,
    repositories: data || [],
    error,
  };
}
