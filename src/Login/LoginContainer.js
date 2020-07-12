import React from 'react'

import { connect } from 'react-redux'

import Register from './Register'
import Login from './Login'

import './LoginContainer.css'

class LoginContainer extends React.Component {
   

    toggleLogin = () => {
        this.props.dispatch({
            type: "CONTAINER_TOGGLE",
            payload: {
                showingRegister: !this.props.showingRegister
            }
        })
       
    }

    render(){
        console.log(this.props.showingRegister)
        return (
            <div className='LoginContainer'>
                <div className='Login-cont-toggle-bar'>
                    <div className={`Login-cont-toggle ${this.props.showingRegister ? '' : 'active' }`} 
                        onClick={this.toggleLogin}>Login</div>
                    <div className={`Login-cont-toggle ${this.props.showingRegister ? 'active' : '' }`} 
                        onClick={this.toggleLogin}>Register</div>
                </div>
                {this.props.showingRegister 
                ? <Register /> 
                : <Login />}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showingRegister: state.loginContainer.showingRegister
    }
}

export default connect(mapStateToProps)(LoginContainer);