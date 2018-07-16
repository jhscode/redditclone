import React from 'react';
import { TextField, Paper } from '@material-ui/core';

class MakePost extends React.Component {
  render() {
    return (
      <Paper>
        <form>
          <TextField id="title" label="Title" margin="normal" />
          <br />
          <TextField
            id="textarea"
            label="Comment"
            placeholder="Comment"
            multiline
            fullwidth
            rows="4"
            margin="normal"
          />
        </form>
      </Paper>
    );
  }
}

export default MakePost;
