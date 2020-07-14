import React, { Component } from 'react'

import Board from './Board/Board'
import Tray from './Tray/Tray'

class ProjectMenu extends Component {
    render() {
        return (
            <div className='ProjectContainer'>
                < Tray />
                < Board />

                
            </div>
        )
    }
}
export default ProjectMenu