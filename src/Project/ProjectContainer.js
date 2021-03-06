import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import './ProjectContainer.css'

import ProjectMenu from './ProjectMenu/ProjectMenu'
import ProjectDetail from './ProjectDetail/ProjectDetail'
import Budget from '../Budget/Budget'
import Invite from '../Invite/Invite'
import BlockCont from './Block/BlockCont'
import BlockDetail from './Block/BlockDetail'
import TaskCont from './Task/TaskCont'
import CreateProject from './ProjectMenu/Board/Cards/CreateProject'


class ProjectContainer extends Component {
    render() {
        
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                <Switch >
                   < Route exact path='/projects' render={(props) => < ProjectMenu routeProps={props} /> }/>
                   < Route exact path='/projects/new' render={(props)=> < CreateProject routeProps={props} />}/>
                   < Route path='/projects/:p_id/blocks/:b_id/tasks/:t_id' render={(props)=> < TaskCont routeProps={props} />}/>
                   < Route path='/projects/:p_id/blocks/:b_id' render={(props)=> < BlockDetail routeProps={props} />}/>
                   < Route path='/projects/:p_id/blocks' render={(props)=> < BlockCont routeProps={props} />}/>
                   < Route path='/projects/:p_id/budget' render={(props)=> < Budget routeProps={props} />}/>
                   < Route path='/projects/:p_id/invite' render={(props)=> < Invite routeProps={props} />}/>
                   < Route path='/projects/:p_id' render={(props)=> < ProjectDetail routeProps={props}/>}/>
                </Switch>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => {
    return { navIsOpen: state.navbar.isOpen}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);