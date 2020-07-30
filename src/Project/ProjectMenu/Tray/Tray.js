import React, { Component } from 'react'

import {connect} from 'react-redux'
import { toggleCompleteProjects } from '../../../Redux/Actions/projects'
import { fetchGeneralPerf, generalCleanup } from '../../../Redux/Actions/performance'

import Widget from './Widget'


import './Tray.css'

 class Tray extends Component {

    componentWillUnmount() { this.props.cleanupGeneral() }

    componentDidMount(){
        this.props.getDashboard()
    }

    render() {
        return (
            <div className='Tray transparent'>
                <div className='Widget toggle'>
                    <div className={`toggle-router ${this.props.showAll ? '' : 'filter'}`} onClick={this.props.toggleProjects}>
                        <div className='toggle-button'></div>
                    </div>
                </div>
                <div className = 'Widget-wrapper'>
                    < Widget completed={this.props.completed} wid_type={"completed"} />
                    < Widget current={this.props.current} wid_type={"current"} />
                    < Widget budget={this.props.budget} wid_type={"budget"} />
                    < Widget delayed={this.props.delayed} wid_type={"delayed"} />
                    < Widget progress={this.props.in_progress} wid_type={"in_progress"} />
                    < Widget contributors={this.props.contributors} wid_type={"contributors"} />
                 
                </div>
                   
                    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleProjects: () => {dispatch(toggleCompleteProjects())},
        getDashboard: () => {dispatch(fetchGeneralPerf())},
        cleanupGeneral: () => {dispatch(generalCleanup())}
    }
}

const mapStateToProps = (state) => {
    return {
        showAll: state.projects.showAll,
        completed: state.performance.generalStat.completed,
        current: state.performance.generalStat.current,
        budget: state.performance.generalStat.budget,
        delayed: state.performance.generalStat.delayed,
        in_progress: state.performance.generalStat.in_progress,
        contributors: state.performance.generalStat.contributors,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tray);