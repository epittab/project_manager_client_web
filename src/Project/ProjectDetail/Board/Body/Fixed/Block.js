import React, { Component } from 'react'

import {connect } from 'react-redux'

import FixedCell from './FixedCell'
import DynamicCell from '../Dynamic/DynamicCell'
import TaskCell from './TaskCell'


class Block extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isTaskShowing: true,
            tasks: this.props.block.tasks
        }
    }

    toggleTask = () => {
        this.setState({isTaskShowing: !this.state.isTaskShowing})
    }


    render() {
      
        const days = new Array(this.props.duration).fill("")
        // let tasksList = this.props.block && this.props.block.tasks.length > 0 ? 
        // this.props.block.tasks.map(t => <Row key={t.id} name={t.task_name} task={t} block={this.props.block} b_id={this.props.block.block.id} routeProps={this.props.routeProps} days={days}/>)
        // : null
        return (
            <div className='GroupRow' >
                <div style ={{display: 'flex', width: '100%'}} >
                    < FixedCell name= {this.props.block.block.block_name} block={this.props.block} isHeader={false} routeProps={this.props.routeProps} handleToggle={this.toggleTask}/>
                    {days.map( (day, index) => < DynamicCell key={index+1} isHeader={false} psd={this.props.psd}
                                                    startDate={this.props.block.b_s_date} endDate={this.props.block.b_e_date} 
                                                    cellIndex={index}/> )}
                </div>
                <div className={`${ this.state.isTaskShowing ? "" : "hide" }`}>
                    {(this.state.tasks && this.state.tasks.length > 0) ? 
                        this.state.tasks.map( t => < TaskCell key={t.id} p_id={this.props.block.block.project_id} 
                            b_id={this.props.block.block.id} task={t} psd={this.props.psd} days={days}/> ) :
                        null}    
                   
               
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)