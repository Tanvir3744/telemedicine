import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

// declare the types of form props
type FormTypeProps = {
  name: string;
  fullWidth?:boolean,
  label?: string, 
  variant: string,
  type?: string,
  size?: "medium"| "small",
  placeholder?: string,
  required?:boolean
};

const CustomInput = ({name, fullWidth,label,type}: FormTypeProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState : {error}}) => (
        <TextField
        {...field}
          fullWidth = {fullWidth}
          label={label}
          type = {type}
          variant="outlined"
          placeholder={label}
          error = {!!error?.message}
          helperText = {error?.message}
        />
      )}
    />
  );
};

export default CustomInput;
