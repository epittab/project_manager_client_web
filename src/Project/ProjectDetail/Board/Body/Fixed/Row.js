import React, { Component } from 'react'

import FixedCell from './FixedCell'
import DynamicCell from '../Dynamic/DynamicCell'
class Row extends Component {
    render() {
        return (
            <div>
                <div style ={{display: 'flex', width: '100%'}} >
                    < FixedCell name= {this.props.name} task={this.props.task} routeProps={this.props.routeProps} b_id={this.props.b_id} isHeader={false} />
                    {this.props.days.map( (day, index) => < DynamicCell key={index+1} isHeader={false} cellIndex={index} startDate={this.props.task.est_start_date} endDate={this.props.task.est_end_date}/> )}
                </div>
            </div>
        )
    }
}
export default Row