import React, { Component } from 'react'

import './DeleteButton.css'

class DeleteButton extends Component {
    render() {
        return (
            <button className='DeleteButton' style={{height: this.props.size, minWidth: this.props.size}}>
            </button>
        )
    }
}
export default DeleteButton;