import React, { Component } from 'react'

import Task from './Task'
import DynamicCell from '../Dynamic/DynamicCell'
class Row extends Component {
    render() {
        return (
            <div>
                <Task name={this.props.name}/>
                {/* iterate over number of days with Dynamic Cell */}
                {/* < DynamicCell /> */}
            </div>
        )
    }
}
export default Row