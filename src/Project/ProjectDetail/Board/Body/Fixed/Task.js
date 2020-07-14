import React, { Component } from 'react'

class Task extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
export default Task