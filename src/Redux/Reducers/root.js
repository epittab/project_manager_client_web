import {combineReducers} from 'redux';
import register from './register'
import login from './login'
import navbar from './navbar'
import loginContainer from './loginContainer'

export default combineReducers({
    register, login, loginContainer, navbar
});


// 'REGISTER_FORM': register,
//     'LOGIN_FORM': login