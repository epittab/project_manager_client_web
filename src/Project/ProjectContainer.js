import React, { Component } from 'react'

import {connect} from 'react-redux'

import './ProjectContainer.css'

import Board from './Board/Board'
import Tray from './Tray/Tray'

class ProjectContainer extends Component {
    render() {
        
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                < Tray />
                < Board />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { navIsOpen: state.navbar.isOpen}
}

export default connect(mapStateToProps)(ProjectContainer);