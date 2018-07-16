import React, { Fragment } from 'react';
import { TextField, Paper, Grid } from '@material-ui/core';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class MakePost extends React.Component {
  render() {
    return (
      <Grid item sm={16}>
        <Paper style={style.Paper}>
          <form>
            Make A Quick Post
            <br />
            <TextField id="title" label="Title" margin="normal" />
            <br />
            <TextField
              id="textarea"
              label="Comment"
              multiline
              rows="4"
              margin="normal"
            />
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default MakePost;
