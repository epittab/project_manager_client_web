import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class InviteCard extends Component {
    render() {
        return (
            <Link className='widget-link' to={`/projects/${this.props.routeProps.match.params.p_id}/invite`}><div className='Widget '>
                <div className=' add-widget'></div>
                <div className='widget-text'>Teammates</div>
            </div></Link>
        )
    }
}

export default InviteCard