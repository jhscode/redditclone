import React from 'react';
import { TextField } from '@material-ui/core';

class MakePost extends React.Component {
  render() {
    return (
      <form>
        <TextField id="title" label="Title" margin="normal" />
      </form>
    );
  }
}

export default MakePost;
