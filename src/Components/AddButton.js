import React, { Component } from 'react'

import './AddButton.css'

class AddButton extends Component {
    render() {
        return (
            <div className='AddButton' style={{height: `${this.props.size}rem`, width: `${this.props.size}rem`}}>
                <div className='add-image' style={{height: `${this.props.size*.6}rem`, width: `${this.props.size*.6}rem`}}></div>
            </div>
        )
    }
}
export default AddButton;