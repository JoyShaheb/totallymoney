import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UseFormRegisterReturn } from "react-hook-form";

interface IOption {
  value: string;
  label: string;
}

interface iInputSelect {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  options?: IOption[];
  value?: string;
  onChange: (value: string) => void;
}

const InputSelect: FC<iInputSelect> = ({
  label,
  register,
  error,
  helperText,
  placeholder,
  options,
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) =>
    onChange(event.target.value);

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
          options?.map((option: IOption) => (
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
