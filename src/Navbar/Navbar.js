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
            
            <Link to='/projects' className='Navbar-link'><div className='Navbar-link-item'>Project</div></Link>
            <Link to='/performance' className='Navbar-link'><div className='Navbar-link-item'>Performance</div></Link>
            <Link to='/account' className='Navbar-link'><div className='Navbar-link-item'>Account</div></Link>


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