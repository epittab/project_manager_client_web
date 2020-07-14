import React from 'react';

import {Switch, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './Redux/store'

import './App.css';

import LoginC from './Login/LoginContainer'
import Navbar from './Navbar/Navbar'
import Project from './Project/ProjectContainer'

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>

        <div className="App">
          <Navbar />
          
          <Switch>
            <Route path='/projects' render={ () => < Project /> } />
            <Route path='/account' render={ () => < LoginC /> } />
            <Route path='/performance' render={ () => < LoginC /> } /> 
            <Route exact path='/' render={ () => < LoginC /> } />
            <Route path='' render={ () => <div>404</div> } />
          </Switch>
        
        </div>

      </Provider>
    )
  }
}

export default App;
