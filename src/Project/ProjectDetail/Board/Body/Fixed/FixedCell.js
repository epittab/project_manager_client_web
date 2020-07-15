import React, { Component } from 'react'

import Indicator from '../../Header/Indicator'

class FixedCell extends Component {
    render() {
        return (
            <div style={{width: '150px', textAlign: 'center', lineHeight: '4rem', backgroundColor: 'lightblue'}}>
                { this.props.isHeader ? < Indicator /> : this.props.name}
            </div>
        )
    }
}

export default FixedCell;