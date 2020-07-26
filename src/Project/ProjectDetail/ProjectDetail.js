import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

import Budget from '../../Budget/Budget'
import Board from './Board/Board'
import Tray from './Tray/Tray'
// import NewBlock from '../Block/NewBlock';

class ProjectDetail extends Component {
    render() {
        return (
            <div className='ProjectContainer'>
                <Tray routeProps={this.props.routeProps}/> 
                <Switch >
                    <Route path='/:p_id/budgets' render={ (props) => < Budget routeProps={this.props.routeProps}/> } />
                    <Route path='/' render={ () => < Board routeProps={this.props.routeProps} /> } />
                </Switch>
            </div>
        )
    }
}
export default ProjectDetail;