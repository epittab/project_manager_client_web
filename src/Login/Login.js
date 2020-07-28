import React from 'react'

import {connect} from 'react-redux'
import { postLogin, changeLoginForm, loginFormCleanup } from '../Redux/Actions/login'


class Login extends React.Component {
   
    componentWillUnmount(){this.props.cleanup()}

    render(){
        
        return (
            <div className='Login'>

                <form className='form-body' onSubmit={(e) => this.props.handleSubmit(e, this.props.form)}>
                    <label className='form-text'  htmlFor='Log-username'> Username: 
                    <input id='Log-username' name='username' 
                            type='text'
                            value={this.props.username} 
                            onChange={(e) => this.props.handleChange(e)}/>
                    </label>
                    <label className='form-text'  htmlFor='Log-password'> Password:
                    <input id='Log-password' name='password' 
                            type='password'
                            value={this.props.password} 
                            onChange={(e) => this.props.handleChange(e)}/>
                     </label>
                    <button className='form-button primary' type='submit'>Login</button>
                </form>


            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e, form) => {dispatch(postLogin(e, form))},
        handleChange: (e) => {dispatch(changeLoginForm(e))},
        cleanup: () => {dispatch(loginFormCleanup())}
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.login,
        username: state.login.username,
        password: state.login.password
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);