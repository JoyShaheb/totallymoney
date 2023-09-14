import { FC } from "react";
import { TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

interface iInputProps {
  defaultValue?: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  register?: any;
  type?: string | number;
}

const Input: FC<iInputProps> = ({
  label,
  placeholder,
  variant,
  error,
  helperText,
  register,
  type,
  defaultValue,
}) => {
  return (
    <TextField
      fullWidth
      defaultValue={defaultValue}
      type={type ? type : "text"}
      error={error}
      id={nanoid()}
      helperText={helperText}
      label={label}
      variant={variant ? variant : "outlined"}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
