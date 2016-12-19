import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from './other-components/navbar';
import FlashMessage from './other-components/flash-message';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <Navbar/>
          <FlashMessage/>
           {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
