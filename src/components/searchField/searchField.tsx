import React, { FC } from "react";

interface Props {
  id: string,
  name: string,
  label: string,
  value: string | undefined,
  onChange: any,
}

export const SearchField: FC<Props> = ({ id, name, label, value, onChange }) => (
  <div>
    <label htmlFor={id}>
      {label}
    </label>
    <input
      type="text"
      className="form-control"
      id={id}
      name={name}
      placeholder={label}
      value={value || ''}
      onChange={onChange}
    />
  </div>
)
