export const URL = 'https://api.github.com/search/repositories';
export const LIMIT = 10;

interface IOwner {
  login: string,
}

export interface IRepository {
  id: number,
  name: string,
  owner: IOwner,
  stargazers_count: number,
  created_at: Date,
}

export interface IList {
  repositories: IRepository[],
}

export enum FETCH_STATUS {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  error = 'error',
}
