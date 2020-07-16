import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

import Budget from '../../Budget/Budget'
import Board from './Board/Board'
import Tray from './Tray/Tray'

class ProjectDetail extends Component {
    render() {
        return (
            <div className='ProjectContainer'>
                <Tray /> 
                <Switch >
                    <Route path='/:p_id/budgets' render={ () => < Budget /> } />
                    <Route path='/' render={ () => < Board /> } />
                </Switch>
                

            </div>
        )
    }
}
export default ProjectDetail;