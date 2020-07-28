import React from 'react';

import {Switch, Route, withRouter} from 'react-router-dom'

import { connect } from 'react-redux'
import { checkAuthorization } from './Redux/Actions/auth'

import './App.css';

import Logout from './Login/Logout'
import LoginC from './Login/LoginContainer'
import Navbar from './Navbar/Navbar'
import Project from './Project/ProjectContainer'
import AccountCont from './Account/AccountCont';
import PerformanceCont from './Performance/PerformanceCont';

class App extends React.Component {
  componentDidMount(){
    console.log('hi')
    this.props.onReload()
  }

  render() {

    return (
        <div className="App">
          <Navbar />
          
          <Switch>
            <Route path='/projects' render={ () => < Project /> } />
            <Route path='/account' render={ () => < AccountCont /> } />
            <Route path='/performance' render={ () => < PerformanceCont /> } />
            <Route path='/logout' component={ Logout } /> 
            <Route exact path='/' render={ () => < LoginC /> } />
            <Route path='*' render={ () => <div>404</div> } />
          </Switch>
        
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReload: () => {dispatch(checkAuthorization())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
