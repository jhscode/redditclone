import React from 'react';
import { Paper, Grid } from '@material-ui/core';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class MakePost extends React.Component {
  render() {
    return (
      <Grid item xs={4}>
        <Paper style={style.Paper}>Right</Paper>
      </Grid>
    );
  }
}

export default MakePost;
