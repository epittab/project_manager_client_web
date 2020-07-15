import React, { Component } from 'react'

import FixedCell from './FixedCell'
import DynamicCell from '../Dynamic/DynamicCell'
class Row extends Component {
    render() {
        return (
            <div>
                <div style ={{display: 'flex', width: '100%'}} >
                    < FixedCell name= {this.props.name} isHeader={false} />
                    {this.props.days.map( (day, index) => < DynamicCell key={index+1} isHeader={false}  cellDateOffset={index+1}/> )}
                </div>
            </div>
        )
    }
}
export default Row