import React, { Component } from 'react'

import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import Widget from '../Project/ProjectDetail/Tray/Widget'
import Loading from '../Components/Loading'

import { fetchAllProjectIndicators } from '../Redux/Actions/performance'


class PerformanceCont extends Component {

    componentDidMount(){ this.props.getProjects() }

    render() {
        if (this.props.loading) {
            return <Loading />
        }
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                <div className='Sheet transparent'>
                    { this.props.userProjectInds.map( up => <div className='Tray transparent'>
                <Link to={`/projects/${up.id}`} >GO</Link>
                <div className = 'Widget-wrapper'>
                    < Widget pc={up.indicators.percent_complete} wid_type={'perc_complete'} />
                    < Widget task_dist={up.indicators.task_dist} wid_type={'task_dist'}/>
                    < Widget overBudget={up.indicators.isOverBudget} wid_type={'budget'}/>
                    < Widget total_cost={up.indicators.total_cost} wid_type={'cost'}/>
                    < Widget duration={up.indicators.duration} wid_type={'duration'}/>
                    < Widget days_left={up.indicators.days_remaining} wid_type={'days_left'}/>
                    < Widget team={up.indicators.team_members} wid_type={'team'}/>
                </div>
            </div> )}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => { dispatch(fetchAllProjectIndicators()) }
    }
}

const mapStateToProps = (state) => {
    return { 
        userProjectInds: state.performance.allProjStats,
        loading: state.performance.loading,
        navIsOpen: state.navbar.isOpen,
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PerformanceCont);