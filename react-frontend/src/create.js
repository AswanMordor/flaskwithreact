import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    backgroundColor: "lightgray",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

function Create(){
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form>
        <div>
          <TextField
            required
            id="standard-required"
            label="Email"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            className={classes.textField}
          />
        </div>
        <div className={classes.container}>
        <Button className={classes.button}>Create an Account</Button>
        </div>
      </form>
    </div>
  );
}

export default Create;