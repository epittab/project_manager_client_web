import {combineReducers} from 'redux';
import register from './register'
import login from './login'
import loginContainer from './loginContainer'

export default combineReducers({
    register, login, loginContainer
});


// 'REGISTER_FORM': register,
//     'LOGIN_FORM': login