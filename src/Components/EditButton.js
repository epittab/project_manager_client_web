import React, { Component } from 'react'

import './EditButton.css'

class EditButton extends Component {
    render() {
        return (
            <button className='EditButton' style={{height: this.props.size, minWidth: this.props.size}}>
            </button>
        )
    }
}
export default EditButton;