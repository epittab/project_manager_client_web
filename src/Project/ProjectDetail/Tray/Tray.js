import React, { Component } from 'react'

import Info from './Info'
import Widget from './Widget'
import BudgetCard from './BudgetCard';
import InviteCard from './InviteCard';

import { connect } from 'react-redux'

class Tray extends Component {
    render() {
        return (
            <div className='Tray transparent'>
                
                <div className = 'Widget-wrapper'>
                    < BudgetCard routeProps={this.props.routeProps} />
                    < InviteCard routeProps={this.props.routeProps} />
                    < Widget pc={this.props.pc} wid_type={'perc_complete'} />
                    < Widget task_dist={this.props.task_dist} wid_type={'task_dist'}/>
                    < Widget overBudget={this.props.overBudget} wid_type={'budget'}/>
                    < Widget total_cost={this.props.total_cost} wid_type={'cost'}/>
                    < Widget duration={this.props.duration} wid_type={'duration'}/>
                    < Widget days_left={this.props.days_left} wid_type={'days_left'}/>
                    < Widget team={this.props.team} wid_type={'team'}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        task_dist: state.performance.currProjStat.task_dist,
        pc: state.performance.currProjStat.percent_complete,
        duration: state.performance.currProjStat.duration,
        days_left: state.performance.currProjStat.days_remaining,
        days_worked: state.performance.currProjStat.days_worked,
        team: state.performance.currProjStat.team_members,
        total_cost: state.performance.currProjStat.total_cost,
        overBudget: state.performance.currProjStat.isOverBudget,
    }
}


export default connect(mapStateToProps)(Tray);