import React, { Fragment } from 'react';
import Header from './Header';
import Posts from './Posts';

class App extends React.Component {
  state = {
    posts: []
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Posts posts={this.posts} />
      </Fragment>
    );
  }
}

export default App;
