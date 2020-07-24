import React from 'react'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

import Hamburger from '../Components/Hamburger'

import './Navbar.css'

class Navbar extends React.Component {

    render(){
        return (    
                      
            <nav className={`Navbar${this.props.isOpen ? '' : ' close'}`}>
            <Hamburger/>
            <Link to='/projects' className='Navbar-link'><div className='Navbar-link-item'>{this.props.isOpen ? 'Projects' : 'Pro'}</div></Link>
            <Link to='/performance' className='Navbar-link'><div className='Navbar-link-item'>{ this.props.isOpen ? 'Performance' : 'Perf' }</div></Link>
            <Link to='/account' className='Navbar-link'><div className='Navbar-link-item'>{ this.props.isOpen ? 'Account' : 'Acc'}</div></Link>


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