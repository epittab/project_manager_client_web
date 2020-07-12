import React from 'react'

import {connect} from 'react-redux'

class Register extends React.Component {
    
    componentWillUnmount(){
        this.props.dispatch({type: 'REGISTER_FORM_CLEANUP'})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.props.first_name,
                last_name: this.props.last_name,
                username: this.props.username,
                password: this.props.password
            })
        })
        .then(r => r.json())
        .then( user => {
            this.props.dispatch({type: 'REGISTER_FORM_CLEANUP'})
            console.log(user)
        })
    }

    handleChange = (e) => {
        this.props.dispatch({
            type: "REGISTER_FORM",
            payload: {[e.target.name]: e.target.value}
        })
    }

    render(){
        return (
            <div className='Register'>

                <form className='Login-form-body' onSubmit={this.handleSubmit}>
                    <label className='Login-form-text'  htmlFor='Reg-first_name'> First Name: 
                    <input id='Reg-first_name' name='first_name' 
                        type='text'
                        value={this.props.first_name} 
                        onChange={this.handleChange}/>
                    </label>
                    <label className='Login-form-text'  htmlFor='Reg-last_name'> Last Name: 
                    <input id='Reg-last_name' name='last_name' 
                        type='text'
                        value={this.props.last_name} 
                        onChange={this.handleChange}/>
                    </label>
                    <label  className='Login-form-text' htmlFor='Reg-username'> Username: 
                    <input id='Reg-username' name='username' 
                        type='text'
                        value={this.props.username} 
                        onChange={this.handleChange}/>
                    </label>
                    <label className='Login-form-text'  htmlFor='Reg-password'> Password: 
                    <input id='Reg-password' name='password' 
                        type='password'
                        value={this.props.password} 
                        onChange={this.handleChange}/>
                    </label>
                    <button className='Login-form-button' type='submit'>Register</button>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        first_name: state.register.first_name,
        last_name: state.register.last_name,
        username: state.register.username,
        password: state.register.password
    }
}

export default connect(mapStateToProps)(Register);