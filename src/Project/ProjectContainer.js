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
import TaskDetail from './Task/TaskDetail'


class ProjectContainer extends Component {
    render() {
        
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                <Switch >
                   < Route exact path='/projects' render={() => < ProjectMenu /> }/>
                   < Route path='/projects/:p_id/blocks/:b_id/tasks/:t_id' render={(props)=> < TaskDetail routeProps={props} />}/>
                   < Route path='/projects/:p_id/blocks/:b_id/tasks' render={()=> < TaskCont />}/>
                   < Route path='/projects/:p_id/blocks/:b_id' render={()=> < BlockDetail />}/>
                   < Route path='/projects/:p_id/blocks' render={()=> < BlockCont />}/>
                   < Route path='/projects/:p_id/budget' render={()=> < Budget />}/>
                   < Route path='/projects/:p_id/invite' render={()=> < Invite />}/>
                   < Route path='/projects/:p_id' render={(props)=> < ProjectDetail />}/>
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { navIsOpen: state.navbar.isOpen}
}

export default connect(mapStateToProps)(ProjectContainer);