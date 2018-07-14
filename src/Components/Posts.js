import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const Posts = props => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Paper style={style.Paper}>Left</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={style.Paper}>Right</Paper>
      </Grid>
    </Grid>
  );
};

export default Posts;
