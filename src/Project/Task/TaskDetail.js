import React, { Component } from 'react'

class TaskDetail extends Component {

    handleDelete = (e) => {
        console.log('delete')
    }

    render() {
        
        return (
            <div>

                Task Detail {this.props.routeProps.match.params.t_id}

                <form onSubmit={this.handleDelete}>
                    <button className='form-button' type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}
export default TaskDetail