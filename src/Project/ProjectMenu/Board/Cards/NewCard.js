import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './ProjectCard.css'

class NewCard extends Component {
    constructor(){
        super()
        this.state = {
          
        }
    }
    
    
    render() {
        return (
            <Link to='/projects/new'>
            <div className='Card newCard'>
                <div className='card-icon'>
                </div>
                <div className='card-text'>
                    ADD A PROJECT
                </div>

            </div>
            
            </Link>
        )
    }
}
export default NewCard