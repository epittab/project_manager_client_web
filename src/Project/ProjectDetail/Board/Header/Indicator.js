import React, { Component } from 'react'

import './Indicator.css'

class Indicator extends Component {
    render() {
        return (
            <div className='lb-wrapper'>
                <div className={`indicator-bulb ${this.props.performance}`}>
                </div>
            </div>
            
        )
    }
}
export default Indicator