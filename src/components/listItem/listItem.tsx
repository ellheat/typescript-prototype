import React, { FC } from "react";

interface Props {
  id: number,
  name: string,
  owner: string,
  stars: number,
  createdAt: Date,
}

export const ListItem: FC<Props> = ({ id, name, owner, stars, createdAt }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{owner}</td>
    <td>{stars}</td>
    <td>{createdAt}</td>
  </tr>
)
