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
                <div style ={{display: 'flex', width: '100%'}} onClick={this.toggleTask}>
                    < FixedCell name= {this.props.block.b_name} isHeader={false} />
                    {days.map( (day, index) => {  
    
                    return < DynamicCell key={index+1} isHeader={false}  cellDateOffset={index+1}/> })}
                </div>
                <div className={`${ this.state.isTaskShowing ? "" : "hide" }`}>
                    {this.props.block.tasks.map(t => <Row key={t.id} name={t.t_name} time={t}/>)}
                </div>
            </div>
        )
    }
}
export default Block