import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Loading from '../Components/Loading'

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
        if (this.props.loading) {
            return <Loading />
        }
        if (this.props.isAuthenticated) {
            return < Redirect to='/projects'/>
        }
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
        showingRegister: state.loginContainer.showingRegister,
        loading: state.auth.loading,
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(LoginContainer);