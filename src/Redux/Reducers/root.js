import {combineReducers} from 'redux';
import register from './register'
import login from './login'
import auth from './auth'
import navbar from './navbar'
import loginContainer from './loginContainer'
import projects from './projects'
import blocks from './blocks'
import tasks from './tasks'
import budget from './budget'
import costs from './costs'
import performance from './performance'

export default combineReducers({
    register, login, auth, loginContainer, navbar, projects, blocks, budget, tasks, costs, performance
});
