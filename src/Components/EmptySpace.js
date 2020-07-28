import React, { Component } from 'react'


class EmptySpace extends Component {
    render() {
        return (
            <div className='EmptySpace' style={{width: `${this.props.size}`, backgroundColor: `${this.props.task ? `rgba(187, 217, 209, 1)`: `rgba(207, 237, 229, 1)`}`}}>
            </div>
        )
    }
}
export default EmptySpace