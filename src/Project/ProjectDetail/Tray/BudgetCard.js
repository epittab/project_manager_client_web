import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BudgetCard extends Component {
    render() {
        return (
            <div className='Widget '>
                <Link to={`/projects/${this.props.routeProps.match.params.p_id}/budget`}><div className=' add-widget'></div></Link>
                <span>Add a Budget</span>
            </div>
        )
    }
}

export default BudgetCard