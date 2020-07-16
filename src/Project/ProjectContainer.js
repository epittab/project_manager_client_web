import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import './ProjectContainer.css'

import ProjectMenu from './ProjectMenu/ProjectMenu'
import ProjectDetail from './ProjectDetail/ProjectDetail'
import Budget from '../Budget/Budget'


class ProjectContainer extends Component {
    render() {
        
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                <Switch >
                   < Route exact path='/projects' render={() => < ProjectMenu /> }/>
                   < Route path='/projects/:p_id/budgets' render={()=> < Budget />}/>
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