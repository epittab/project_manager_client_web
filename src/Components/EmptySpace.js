import React, { Component } from 'react'


class EmptySpace extends Component {
    render() {
        return (
            <div className='EmptySpace' style={{width: `${this.props.size}`}}>
            </div>
        )
    }
}
export default EmptySpace