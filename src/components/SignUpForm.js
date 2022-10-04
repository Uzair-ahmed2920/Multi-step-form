
import React from 'react'
import{TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '80ch',
        textAlign: 'center',
      },
    },
  }));

function SignUpForm() {
    const classes = useStyles();
  return (
    <form  className={classes.root} noValidate autoComplete="off">
        
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  )
}

export default SignUpForm