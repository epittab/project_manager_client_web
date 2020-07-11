import {combineReducers} from 'redux';
import register from './register'
import login from './login'

export default combineReducers({
    register, login
});


// 'REGISTER_FORM': register,
//     'LOGIN_FORM': login