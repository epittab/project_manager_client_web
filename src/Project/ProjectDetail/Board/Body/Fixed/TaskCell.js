import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import EditButton from '../../../../../Components/EditButton'
import EmptySpace from '../../../../../Components/EmptySpace'
import DynamicCell from '../Dynamic/DynamicCell'


class TaskCell extends Component {


    render() {
        
        return (
            <div className='TaskCell' >
                <div className='Project-title-column ' style={{backgroundColor: 'rgba(187, 217, 209, 1)'}}>

                    < EmptySpace size={'1rem'} task={true}/>

                    <div className='BlockCell-title-disp-name'> {this.props.task.task_name}</div>

                    {/* need to access task id, block id, est_start_Date, est_end_date: DONE */}

                    <Link className='BlockCell-title-link' to={`/projects/${this.props.p_id}/blocks/${this.props.b_id}/tasks/${this.props.task.id}`}>< EditButton size={1.2}/></Link>< EmptySpace size='1.2rem' />

                </div>
        
                {/* consider wrapping buttons in a single container and switching to grid*/}   
                
                  {this.props.days.map( (day, index) => < DynamicCell key={index+1} isHeader={false} cellIndex={index} psd={this.props.psd} startDate={this.props.task.est_start_date} endDate={this.props.task.est_end_date} /> )}

            </div>
        )
    }
}

export default TaskCell