import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core/';
import MakePost from './MakePost';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class Posts extends React.Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={8}>
          <Paper style={style.Paper}>Summary Of Posts</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={style.Paper}>
            <MakePost />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Posts;
