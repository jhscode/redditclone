import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';

class MakePost extends React.Component {
  render() {
    return (
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
    );
  }
}

export default MakePost;
