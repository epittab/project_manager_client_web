import React, { Component } from 'react'

import './Widget.css'

class Widget extends Component {
    renderTeam(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.contributors)}</p>
            <p className='widget-text'>Team Member{ this.props.team > 1 ? 's' : ''}</p>
        </div>)
    }
    renderComplete(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.completed)}</p>
            <p className='widget-text'>Completed</p>
        </div>)
    }
    renderCurrent(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.current)}</p>
            <p className='widget-text'>Active Project{ this.props.current > 1 ? 's' : ''}</p>
        </div>)
    }
    renderBudget(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.budget.toFixed(0))}</p>
            <p className='widget-text'>Managed Budget</p>
        </div>)
    }
    renderDelayed(){

        return ( <div>
            <p className='widget-score-text bad'>{(this.props.delayed.length)}</p>
            <p className='widget-text'>Delayed Task{ this.props.delayed.length > 1 ? 's' : ''}</p>
        </div>)
    }
    renderProgress(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.progress.length)}</p>
            <p className='widget-text'>Task{ this.props.progress.length > 1 ? 's' : ''} in Progress</p>
        </div>)
    }
    renderContributors(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.contributors)}</p>
            <p className='widget-text'>Contributor{ this.props.contributors > 1 ? 's' : ''}</p>
        </div>)
    }

    render() {
        return (
            <div className='Widget'>
                { (this.props.wid_type === 'completed' && this.props.completed) ? this.renderComplete() : null }
                { (this.props.wid_type === 'current' && this.props.current) ? this.renderCurrent() : null }
                { (this.props.wid_type === 'budget' && this.props.budget) ? this.renderBudget() : null }
                { (this.props.wid_type === 'delayed' && this.props.delayed) ? this.renderDelayed() : null }
                { (this.props.wid_type === 'in_progress' && this.props.progress) ? this.renderProgress() : null }
                { (this.props.wid_type === 'contributors' && this.props.contributors) ? this.renderContributors() : null }
            </div>
        )
    }
}

export default Widget;