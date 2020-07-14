import React, { Component } from 'react'

import CreateProject from './CreateProject'

import './ProjectCard.css'

class NewCard extends Component {
    constructor(){
        super()
        this.state = {
          modal: false
        }
    }
    
    toggleModal = () => {
        this.state.modal ? 
        this.setState({modal: false}) : 
        this.setState({modal: true})  
    }
    
    render() {
        return (
            <div className='Card newCard' onClick={this.toggleModal}>
                <div className='card-icon'>
                </div>
                <div className='card-text'>
                    ADD A PROJECT
                </div>
                <CreateProject display={this.state.modal} toggle={this.toggleModal} />
            </div>
        )
    }
}
export default NewCard