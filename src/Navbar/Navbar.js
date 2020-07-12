import React from 'react'

import Hamburger from '../Components/Hamburger'

import './Navbar.css'

class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            isOpen: true
        }
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return (
            <nav className='Navbar'>
                <Hamburger isOpen={this.state.isOpen} toggle={this.toggleOpen}/>
                <div>Project</div>
                <ul></ul>
                <div>Avatar</div>
            </nav>
        )
    }
}

export default Navbar;