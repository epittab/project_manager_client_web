import React, { Component } from 'react'

import {connect} from 'react-redux'

import {toggleNav} from '../Redux/Actions/navbar'

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

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch(toggleNav())
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.navbar.isOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);