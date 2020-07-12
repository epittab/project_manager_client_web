import React from 'react'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

import Hamburger from '../Components/Hamburger'

import './Navbar.css'

class Navbar extends React.Component {
  

    toggleOpen = () => {
        this.props.dispatch({
            type: 'TOGGLE_NAV',
            payload: {
                isOpen: !this.props.isOpen
            }
        })
        
    }

    render(){
        return (
            <nav className={`Navbar${this.props.isOpen ? '' : ' close'}`}>
                <Hamburger isOpen={this.props.isOpen} toggle={this.toggleOpen}/>
                <div><Link className='Navbar-link' to='/projects'>Project</Link></div>
                <ul></ul>
                <div>Avatar</div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.navbar.isOpen
    }
}

export default connect(mapStateToProps)(Navbar);