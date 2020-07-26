import React, { Component } from 'react'

import './DeleteButton.css'

class DeleteButton extends Component {
    render() {
        return (
            <div className='DeleteButton' style={{height: `${this.props.size}rem`, width: `${this.props.size}rem`}}>
            <div className='delete-image' style={{height: `${this.props.size*.6}rem`, width: `${this.props.size*.6}rem`}}></div>
            </div>
        )
    }
}
export default DeleteButton;