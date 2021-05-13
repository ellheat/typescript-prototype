import { useQuery } from 'react-query';
import axios from 'axios';

import { URL, LIMIT } from './useRepositories.constants';

type DataModel = {
  items: [],
  total_count: number,
  incomplete_results: boolean
}
type FetchRepositoriesType = Promise<DataModel>
type UseRepositoriesResult = {
  status: string,
  pagesCount: number,
  repositories: [],
}


const fetchRepositories: (query: string, page?: number) => FetchRepositoriesType = async (query, page= 1) => {
  const { data } = await axios.get(`${URL}?q=${query}&page=${page}&per_page=${LIMIT}`);
  return data;
};

export const useRepositories: (query: string, page: number) => UseRepositoriesResult = (query, page) => {
  const { status, data } = useQuery<DataModel>(
    ['repositories', query, page],
    () => fetchRepositories(query, page),
    {
      enabled: query !== '',
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const totalCount = data?.total_count || 1;

  return {
    status,
    pagesCount: totalCount <= LIMIT ? 1 : Math.ceil(totalCount / LIMIT),
    repositories: data?.items || [],
  };
}
