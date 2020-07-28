import React from 'react';

import {Switch, Route, withRouter} from 'react-router-dom'

import { connect } from 'react-redux'
import { checkAuthorization } from './Redux/Actions/auth'

import './App.css';

import ProtectedRoute from './Components/ProtectedRoute'
import Logout from './Login/Logout'
import LoginC from './Login/LoginContainer'
import Navbar from './Navbar/Navbar'
import Project from './Project/ProjectContainer'
import AccountCont from './Account/AccountCont';
import PerformanceCont from './Performance/PerformanceCont';

class App extends React.Component {
  componentDidMount(){
    this.props.onReload()
  }

  render() {

    return (
        <div className="App">
          <Navbar />
          
          <Switch>
            <ProtectedRoute isAuth={this.props.isAuth} path='/projects' component={ Project  } />
            <ProtectedRoute isAuth={this.props.isAuth}  path='/account' component={ AccountCont  } />
            <ProtectedRoute isAuth={this.props.isAuth}  path='/performance' component={  PerformanceCont } />
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

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
