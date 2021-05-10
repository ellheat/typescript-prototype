import React, { FC } from "react";

import { ListItem } from "../listItem/listItem";
import { IList, IRepository } from '../../hooks/useRepositories';


export const List: FC<IList> = ({ repositories }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Owner</th>
          <th scope="col">Stars</th>
          <th scope="col">Created at</th>
        </tr>
        </thead>
        <tbody>
          {repositories?.map((repository: IRepository, key: number) =>
            <ListItem
              id={repository.id}
              name={repository.name}
              owner={repository.owner.login}
              stars={repository.stargazers_count}
              createdAt={repository.created_at}
            />
          )}
        </tbody>
      </table>
    </div>
  )
};
