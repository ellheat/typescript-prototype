import { useQuery } from 'react-query';
import axios from 'axios';

import { URL, LIMIT } from './useRepositories.constants';

export type FetchRepositoriesType = (query: string, page?: number) => void
type UseRepositoriesResult = { status: string, repositories: [], error: unknown }


const fetchRepositories: FetchRepositoriesType = async (query, page= 1) => {
  const { data } = await axios.get(`${URL}?q=${query}&page=${page}&per_page=${LIMIT}`);
  return data.items;
};

export const useRepositories: (query: string, page: number) => UseRepositoriesResult = (query, page) => {
  const { status, data, error } = useQuery(
    ['repositories', query, page],
    () => fetchRepositories(query, page),
    {
      enabled: query !== '',
      retry: false,
    }
  );

  return {
    status,
    repositories: data || [],
    error,
  };
}
