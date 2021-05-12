import React from 'react';

import { Table } from '../table';
import { IList, IRepository } from '../../hooks/useRepositories';


export const RepositoriesTable = ({ repositories }: IList) => {
  const columns = ['id', 'name', 'owner', 'stars', 'createdAt'];

  const rows = repositories.map((item: IRepository) => ({
    id: item.id,
    name: item.name,
    owner: item.owner.login,
    stars: item.stargazers_count,
    createdAt: item.created_at,
  }));

  return (
    <Table columns={columns} rows={rows} />
  )
};
