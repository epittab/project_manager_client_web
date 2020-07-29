import React, { Component } from 'react'

import {connect} from 'react-redux'
import { toggleCompleteProjects } from '../../../Redux/Actions/projects'

import Widget from './Widget'


import './Tray.css'

 class Tray extends Component {

    render() {
        return (
            <div className='Tray transparent'>
                <div className='Widget toggle'>
                    <div className={`toggle-router ${this.props.showAll ? '' : 'filter'}`} onClick={this.props.toggleProjects}>
                        <div className='toggle-button'></div>
                    </div>
                </div>
                <div className = 'Widget-wrapper'>
                    < Widget />
                    < Widget />
                    < Widget />
                    < Widget />
                    < Widget />
                    < Widget />
                 
                </div>
                   
                    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleProjects: () => {dispatch(toggleCompleteProjects())}
    }
}

const mapStateToProps = (state) => {
    return {
        showAll: state.projects.showAll
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tray);