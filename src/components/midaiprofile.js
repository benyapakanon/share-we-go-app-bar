import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 50,
    width: 200,
    height: 200
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
  <Box>

  
    <Grid container justify="center" alignItems="center">
      <Avatar image="midai/t1.jpg" className={classes.bigAvatar} />
    </Grid>
  </Box>
  );
}
