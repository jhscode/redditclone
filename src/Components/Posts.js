import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core/';
import MakePost from './MakePost';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class Posts extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={8}>
          <Paper style={style.Paper}>Summary Of Posts</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={style.Paper}>
            <Button
              variant="contained"
              color="secondary"
              onclick={this.handleHome}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handlePost}
            >
              Make A Post
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Posts;
