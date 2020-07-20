import React, { Component } from 'react'

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
            <div>

                <form onSubmit={this.handleDelete}>
                    <button className='form-button' type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}
export default TaskDetail