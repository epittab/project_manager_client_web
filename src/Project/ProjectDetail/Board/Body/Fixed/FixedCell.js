import React, { Component } from 'react'

import BlockCell from './BlockCell'
import Indicator from '../../Header/Indicator'

class FixedCell extends Component {
   
    render() {
        return (
            <div className={`Project-title-column ${(this.props.handleToggle || this.props.isHeader) ? '' : 'task'}`}  >
                { this.props.isHeader ? 
                < Indicator performance={' warning-bulb'} /> : 
                <BlockCell name={this.props.name} toggle={this.props.handleToggle}/> }
            </div>
        )
    }
}

export default FixedCell;