
import React from 'react'
import{TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '80%',
        textAlign: 'center',
      },
      fontFamily:{
        
      }
    },
  }));

function SignUpForm() {
    const classes = useStyles();
  return (
    <>
    <Typography variant='h4'> Basic Info</Typography>
    <form  className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    </>
  )
}

export default SignUpForm