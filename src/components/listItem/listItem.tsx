import React, { FC } from "react";

interface Props {
  id: number,
  name: string,
  owner: string,
  stars: number,
  createdAt: Date,
}

export const ListItem: FC<Props> = ({ name, owner, stars, createdAt }) => (
  <tr>
    <td>{name}</td>
    <td>{owner}</td>
    <td>{stars}</td>
    <td>{createdAt}</td>
  </tr>
)
