import React, { Component } from 'react'

import { connect } from 'react-redux'

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
export default connect()(ProjectMenu)