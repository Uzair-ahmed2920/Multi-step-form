
import React from 'react'
import{TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#e8f5e9',
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