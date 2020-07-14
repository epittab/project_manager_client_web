import React, { Component } from 'react'

import Task from './Task'

class Block extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                
                {this.props.tasks.map(t => <Task key={t.id} name={t.t_name} />)}
            </div>
        )
    }
}
export default Block