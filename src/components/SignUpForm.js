
import React from 'react'
import{TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '70%',
        textAlign: 'center',
        
        [`& fieldset`]: {
          borderRadius: 50,
          backgroundColor: '#e8f5e9',
          boxShadow: "0px 15px 6px -11px rgba(131,219,144,0.83)",
    },
      },

      '&:hover fieldset': {
        borderColor: '#00e676',
      },
      '& fieldset': {
        borderColor: '#00e676',
      },
      fontFamily:{
        fontFamily: 'Raleway',
      },
  },
  }));

function SignUpForm(props) {
    const classes = useStyles();
  return (
    <>
    <Typography variant='h4'>{props.Text} </Typography>
    <form  className={classes.root} noValidate autoComplete="off">
      <TextField  id="outlined-basic" label="First Name" variant="outlined" />
      <TextField  id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField  id="outlined-basic" label="Email" variant="outlined" />
      <TextField  id="outlined-basic" label="Password" variant="outlined" />
      <TextField  id="outlined-basic" label="Confirm Password" variant="outlined" />

      
    </form>
    </>
  )
}

export default SignUpForm