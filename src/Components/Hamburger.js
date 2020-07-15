import React, { Component } from 'react'

import './Hamburger.css'

class Hamburger extends Component {

    
    render() {
        return (
            <div className='Hamburger'>
                <div className='Hamburger-wrapper' onClick={this.props.toggle} >
                    <div id='h-line-1' className={`h-line ${this.props.isOpen ? ' close' : ''}`}></div>
                    <div id='h-line-2' className={`h-line ${this.props.isOpen ? ' close' : ''}`}></div>
                    <div id='h-line-3' className={`h-line ${this.props.isOpen ? ' close' : ''}`}></div>
                </div>
            </div>
        )
    }
}

export default Hamburger;