import React, { Component } from 'react';

import Shelf from '../Shelf';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Shelf />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
