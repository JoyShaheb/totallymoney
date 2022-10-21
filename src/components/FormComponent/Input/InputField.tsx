import React, { InputHTMLAttributes, FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  field: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>; // declare register props
}

const InputField: FC<InputProps> = ({
  placeholder,
  label,
  field,
  register,
  type,
  required,
}) => {
  return (
    <>
      <label className="text-capitalize">{label}</label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        {...register(field)}
        className="form-control"
      />
    </>
  );
};

export default InputField;
