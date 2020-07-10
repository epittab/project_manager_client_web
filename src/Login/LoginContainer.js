import React from 'react'

import Register from './Register'
import Login from './Login'

import './LoginContainer.css'

class LoginContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            showingRegister: false
        }
    }

    toggleLogin = () => {
        this.setState({showingRegister: !this.state.showingRegister})
    }

    render(){
        return (
            <div className='LoginContainer'>
                <div className='Login-cont-toggle-bar'>
                    <div className={`Login-cont-toggle ${this.state.showingRegister ? '' : 'active' }`}>Login</div>
                    <div className={`Login-cont-toggle ${this.state.showingRegister ? 'active' : '' }`}>Register</div>
                </div>
                {this.state.showingRegister 
                ? <Register /> 
                : <Login />}

            </div>
        )
    }
}

export default LoginContainer;