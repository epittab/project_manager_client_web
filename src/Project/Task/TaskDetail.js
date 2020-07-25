import React, { Component } from 'react'

import { connect } from 'react-redux'

class TaskDetail extends Component {

    handleDelete = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/tasks/${this.props.routeProps.match.params.t_id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            // ELIMINATE block from state
            this.setState({...this.state, block: data })
        })
        .catch( err => {console.log(err)})
    }

    render() {
        
        return (
            <div className='task-wrapper simple-task'>
                <h3>Delete Task</h3>
                <form onSubmit={this.handleDelete}>
                    <button className='form-button danger action-item' type='submit'>Delete</button>
                </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail)