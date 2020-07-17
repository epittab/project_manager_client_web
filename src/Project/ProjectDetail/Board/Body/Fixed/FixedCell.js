import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import BlockCell from './BlockCell'
import Indicator from '../../Header/Indicator'
import AddButton from '../../../../../Components/AddButton'

class FixedCell extends Component {
   

    render() {
        return (
            <div className={`Project-title-column ${(this.props.handleToggle || this.props.isHeader) ? '' : 'task'}`}  >
                { this.props.isHeader ? 
                (<> <Link to={`/projects/${this.props.routeProps.match.params.p_id}/blocks/new`}>< AddButton size={'1.2rem'} /> </Link> < Indicator performance={' warning-bulb'} /> </>): 
                <BlockCell name={this.props.name} routeProps={this.props.routeProps} 
                    block={this.props.block} task={this.props.task} 
                    b_id={this.props.b_id} toggle={this.props.handleToggle}/> }
            </div>
        )
    }
}

export default FixedCell;