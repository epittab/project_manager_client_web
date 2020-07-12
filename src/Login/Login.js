import React from 'react'

import {connect} from 'react-redux'
class Login extends React.Component {
   
    componentWillUnmount(){
        this.props.dispatch({type: 'LOGIN_FORM_CLEANUP'})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.props.username,
                password: this.props.password
            })
        })
        .then(r => r.json())
        .then( user => {
            if (user.token !== undefined ) {
                localStorage.setItem('token', user.token)
                localStorage.setItem('first_name', user.first_name)
            }
            this.props.dispatch({type: 'LOGIN_FORM_CLEANUP'})
            console.log(user)

        })
    }

    handleChange = (e) => {
        this.props.dispatch({
            type: "LOGIN_FORM", 
            payload: {[e.target.name]: e.target.value}
        })
    }

    render(){
        
        return (
            <div className='Login'>

                <form className='Login-form-body' onSubmit={this.handleSubmit}>
                    <label className='Login-form-text'  htmlFor='Log-username'> Username: 
                    <input id='Log-username' name='username' 
                            type='text'
                            value={this.props.username} 
                            onChange={this.handleChange}/>
                    </label>
                    <label className='Login-form-text'  htmlFor='Log-password'> Password:
                    <input id='Log-password' name='password' 
                            type='password'
                            value={this.props.password} 
                            onChange={this.handleChange}/>
                     </label>
                    <button className='Login-form-button' type='submit'>Login</button>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password
    }
} 

export default connect(mapStateToProps)(Login);