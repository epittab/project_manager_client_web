import React, { Component } from 'react'

import {connect} from 'react-redux'
import { fetchProject, projectCleanup } from '../../../Redux/Actions/projects'
import { fetchProjectPerf } from '../../../Redux/Actions/performance'

import './Board.css'
import Header from './Header/Header'
import GroupRow from './Body/Fixed/GroupRow'
import Loading from '../../../Components/Loading'

class Board extends Component {

    componentDidMount(){
        this.props.getProject(this.props.routeProps.match.params.p_id)
        this.props.getProjectPerf(this.props.routeProps.match.params.p_id)
    }   

    deriveProjectLength() { return this.props.days ? (this.props.days + 1) : 0 }

    renderBoard(){ 
        return (this.props.blocks.map((b) => 
            < GroupRow key = {`Block${b.b_id}`} block = {b} 
            psd={this.props.start}
            routeProps={this.props.routeProps} 
            duration={this.deriveProjectLength()}/> ))
    }

    renderHeader() {
        return  < Header routeProps={this.props.routeProps} 
            psd={this.props.start}
            duration={this.deriveProjectLength()}/>
    }

    render() {
        if (this.props.isLoading) { return < Loading /> }
        
        return (
            <div className='Board transparent'>
                <div className='board-data'>
                    { this.props.project ? this.renderHeader() : null }
                    { this.props.project ? this.renderBoard() : null }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: (p_id) => {dispatch(fetchProject(p_id))},
        getProjectPerf: (p_id) => {dispatch(fetchProjectPerf(p_id))},
        projectCleanup: ()=>{dispatch(projectCleanup())}
    }
}
const mapStateToProps = (state) => {
    return {
        project: state.projects.currProject.project,
        isLoading: state.projects.loading,
        blocks: state.projects.currProject.blocks,
        days: state.projects.currProject.days,
        start: state.projects.currProject.display_start,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);