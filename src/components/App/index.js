import React, { Component } from 'react';

import Shelf from '../Shelf';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubCorner />
        <main>
          <Shelf />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
