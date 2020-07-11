import React from 'react'

import {connect} from 'react-redux'

class Login extends React.Component {
   

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
            this.props.dispatch({
                type: 'LOGIN_FORM',
                payload: {
                    username: '',
                    password: ''}
            })
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

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='Log-username'> Username: 
                        <input id='Log-username' name='username' 
                            type='text'
                            value={this.props.username} 
                            onChange={this.handleChange}/>
                    </label>
                    <label htmlFor='Log-password'> Password: 
                        <input id='Log-password' name='password' 
                            type='password'
                            value={this.props.password} 
                            onChange={this.handleChange}/>
                    </label>
                    <button type='submit'>Login</button>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    }
} 

export default connect(mapStateToProps)(Login);