import React, { Component } from 'react'

import './EditButton.css'

class EditButton extends Component {
    render() {
        return (
            <div className='EditButton' style={{height: `${this.props.size}rem`, width: `${this.props.size}rem`}}>
                <div className='edit-image' style={{height: `${this.props.size*.6}rem`, width: `${this.props.size*.6}rem`}}></div>
            </div>
        )
    }
}
export default EditButton;