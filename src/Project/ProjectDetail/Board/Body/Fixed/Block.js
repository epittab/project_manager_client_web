import React, { Component } from 'react'
import FixedCell from './FixedCell'
import DynamicCell from '../Dynamic/DynamicCell'
import Row from './Row'


class Block extends Component {

    constructor() {
        super()
        this.state = {
            isTaskShowing: true,
            
        }
    }

    toggleTask = () => {
        this.setState({isTaskShowing: !this.state.isTaskShowing})
    }


    render() {
        const days = new Array(this.props.duration).fill("")
        return (
            <div className='GroupRow' >
                <div style ={{display: 'flex', width: '100%'}} >
                    < FixedCell name= {this.props.block.b_name} block={this.props.block} isHeader={false} routeProps={this.props.routeProps} handleToggle={this.toggleTask}/>
                    {days.map( (day, index) => < DynamicCell key={index+1} isHeader={false} 
                                                    startDate={this.props.block.b_s_date} endDate={this.props.block.b_e_date} 
                                                    cellIndex={index}/> )}
                </div>
                <div className={`${ this.state.isTaskShowing ? "" : "hide" }`}>
                    {this.props.block.tasks.map(t => <Row key={t.id} name={t.t_name} task={t} b_id={this.props.block.b_id} routeProps={this.props.routeProps} days={days}/>)}
                </div>
            </div>
        )
    }
}
export default Block