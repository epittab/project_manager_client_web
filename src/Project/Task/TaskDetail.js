import React, { Component } from 'react'

class TaskDetail extends Component {
    render() {
        
        return (
            <div>

                Task Detail {this.props.routeProps.match.params.t_id}

            
            </div>
        )
    }
}
export default TaskDetail