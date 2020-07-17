import React, { Component } from 'react'

import './AddButton.css'

class AddButton extends Component {
    render() {
        return (
            <button className='AddButton' style={{height: this.props.size, minWidth: this.props.size}}>
            </button>
        )
    }
}
export default AddButton;