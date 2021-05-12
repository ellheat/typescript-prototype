import React from 'react';
import TextField from '@material-ui/core/TextField';


interface Props {
  id: string,
  name: string,
  label: string,
  value: string | undefined,
  onChange: any,
}

export const SearchField = ({ id, name, label, value, onChange }: Props) => (
  <TextField id={id} label={label} name={name} onChange={onChange} value={value} />
)
