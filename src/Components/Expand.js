import React, { Component } from 'react'

import './Expand.css'

class Expand extends Component {

    allToggles = () => {
        this.props.toggle()
        this.props.toggleOpen()
    }

    render() {
        return (
            <div className='Expand'>
                <div className='Expand-wrapper' onClick={this.allToggles} >
                    <div id='e-line-1' className={`e-line ${this.props.isOpen ? ' close' : ''}`}></div>
                    <div id='e-line-2' className={`e-line ${this.props.isOpen ? ' close' : ''}`}></div>
                </div>
            </div>
        )
    }
}

export default Expand;