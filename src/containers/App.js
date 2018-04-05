import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    fetch('//localhost:8001/api/products')
    .then( res => res.json() )
    .then( (json) => {
      const products = json.products;
      this.setState({products});
    })
  }

  render() {
    console.log(this.state.products);

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
