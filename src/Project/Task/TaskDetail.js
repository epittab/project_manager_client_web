import React, { Component } from 'react'

import { connect } from 'react-redux'
import { deleteTask } from '../../Redux/Actions/tasks'

class TaskDetail extends Component {

    render() {
        
        return (
            <div className='task-wrapper simple-task'>
                <h3>Delete Task</h3>
                <form onSubmit={ () => {this.props.fetchDelete(this.props.routeParams.match.params.t_id)}}>
                    <button className='form-button danger action-item' type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDelete: (task_id) => dispatch(deleteTask(task_id))
    }
}


export default connect(null, mapDispatchToProps)(TaskDetail)