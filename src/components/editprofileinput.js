import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function InputEditProfile() {
  const classes = useStyles();

  return (
  
      <div className={classes.container}>
          <TextField
              label="None"
              id="margin-none"
              defaultValue="Default Value"
              className={classes.textField}
          />
          </div>
     
 );
}
