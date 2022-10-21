import React, { InputHTMLAttributes, FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { nanoid } from "nanoid";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  field: string;
  options: (string | number)[];
  required?: boolean;
  register: UseFormRegister<FieldValues>; // declare register props
}

const Select: FC<SelectProps> = ({
  register,
  label,
  options,
  required,
  field,
}) => {
  return (
    <>
      <label className="text-capitalize">{label}</label>
      <select required={required} {...register(field)} className="form-control">
        <option value="" selected disabled>
          Select an option
        </option>
        ;
        {options.map((item, index) => {
          return (
            <option key={nanoid(5)} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
