import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoginC from './Login/LoginContainer'
import Navbar from './Navbar/Navbar'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        <LoginC />
      </div>
    )
  }
}

export default App;
