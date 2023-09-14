import React, { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface iInputSelect {
  label?: string;
  register?: any;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  options?: any;
  defaultValue?: any;
}

const InputSelect: FC<iInputSelect> = ({
  label,
  register,
  error,
  helperText,
  placeholder,
  options,
  defaultValue,
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        {...register}
        placeholder={placeholder}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options?.length === 0 ? (
          <MenuItem key={nanoid()} value={""}>
            No Options
          </MenuItem>
        ) : (
          options?.map((option: any) => (
            <MenuItem key={nanoid()} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))
        )}
      </Select>
      <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
    </FormControl>
  );
};

export default InputSelect;
