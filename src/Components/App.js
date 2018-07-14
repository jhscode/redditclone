import React, { Fragment } from 'react';
import Header from './Header';
import Posts from './Posts';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Posts />
      </Fragment>
    );
  }
}

export default App;
