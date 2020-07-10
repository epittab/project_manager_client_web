import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store'

import './App.css';

import LoginC from './Login/LoginContainer'
import Navbar from './Navbar/Navbar'

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>

        <div className="App">
          <Navbar />
          <LoginC />
        </div>

      </Provider>
    )
  }
}

export default App;
