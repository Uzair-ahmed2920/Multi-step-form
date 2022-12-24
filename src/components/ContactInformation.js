import React from 'react'
import{Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormInputText } from './FormInputText';
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '70%',
        textAlign: 'center',
        
        [`& fieldset`]: {
          boxShadow: "0px 15px 6px -11px rgba(131,219,144,0.83)", 
          border : '2px solid #00e676',
        },
        [`& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline` ]: {
          borderColor: 'green',
          color: 'green',
        },
        [`& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline`]: {
          borderColor: 'green',
          color: 'green',
        },
        [`& .MuiInputLabel-outlined`]: {
          color: 'green',
        },
        //chnage text color of input text
        [`& .MuiOutlinedInput-input`]: {
          color: 'green',  
        },
        //Change background color of input text field
        [`& .MuiOutlinedInput-root`]: {
          backgroundColor: '#e8f5e9',
          borderRadius: 50,
        },
      },
  },
  }));

function PersonalInfoForm(props) {
    const { control } = useForm();
    const classes = useStyles();
  return (
    <>
    <Typography variant='h4'>{props.Text} </Typography>
    <form  className={classes.root} noValidate autoComplete="off">
      <FormInputText name="address" control={control} label="Address" />
      <FormInputText name="Country" control={control} label="Country" />
      <FormInputText name="city" control={control} label="City" />
      <FormInputText name="state" control={control} label="State" />
      <FormInputText name="zip" control={control} label="Zip" />
    </form>
    </>
  )
}

PersonalInfoForm.propTypes = {}

export default PersonalInfoForm
