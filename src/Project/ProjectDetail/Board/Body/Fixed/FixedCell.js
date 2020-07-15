import React, { Component } from 'react'

import Indicator from '../../Header/Indicator'

class FixedCell extends Component {
   
  
    render() {
        return (
            <div className='Project-title-column' onClick={this.props.handleToggle} >
                { this.props.isHeader ? < Indicator /> : this.props.name}
            </div>
        )
    }
}

export default FixedCell;