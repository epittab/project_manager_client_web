import {combineReducers} from 'redux';
import register from './register'
import login from './login'
import navbar from './navbar'
import loginContainer from './loginContainer'
import projects from './projects'

export default combineReducers({
    register, login, loginContainer, navbar, projects
});
