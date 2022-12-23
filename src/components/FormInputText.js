import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React from "react";

export const FormInputText = ({ name, control, label }) => {
  return (
    // con troller with name, control and rules props is required for react-hook-form to work with material-ui textfield component with validation
    <Controller 
        name={name}
        control={control}
        rules={{ required: "This Field is required"  , minLength: 2 , maxLength: 20 }}
        render={({ field: { onChange, value }, fieldState: { error }}) => (
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
            />
        )}
    />
  );
};
