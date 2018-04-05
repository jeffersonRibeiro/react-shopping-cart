import React, { Component } from 'react';
import './App.css';

import ShelfContainer from '../components/ShelfContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShelfContainer />
      </div>
    );
  }
}

export default App;
