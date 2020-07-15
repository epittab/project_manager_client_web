import React, { Component } from 'react'

import Indicator from '../../Header/Indicator'

class FixedCell extends Component {
   
    render() {
        return (
            <div className={`Project-title-column ${(this.props.handleToggle || this.props.isHeader) ? '' : 'task'}`} onClick={this.props.handleToggle} >
                { this.props.isHeader ? < Indicator performance={' good-bulb'} /> : <span>{this.props.name}</span>}
            </div>
        )
    }
}

export default FixedCell;