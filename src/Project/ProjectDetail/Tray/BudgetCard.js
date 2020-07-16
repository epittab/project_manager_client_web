import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class BudgetCard extends Component {
    render() {
        return (
            <Link className='widget-link' to={`/projects/${this.props.routeProps.match.params.p_id}/budget`}><div className='Widget '>
                <div className=' add-widget'></div>
                <div className='widget-text'>Add a Budget</div>
            </div></Link>
        )
    }
}

export default BudgetCard