import React from 'react';

import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


interface TableProps {
  columns: string[],
  rows: object[],
}

export const Table = ({ columns, rows }: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="table">
        <TableHead>
          <TableRow>
            {columns.map((cell, index) => (
              <TableCell key={cell + index}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((cell, deepIndex) => (
                <TableCell key={cell + deepIndex}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
};
