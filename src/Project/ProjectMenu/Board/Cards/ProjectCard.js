import React, { Component } from 'react'

import './ProjectCard.css'

class ProjectCard extends Component {
    render() {
        return (
            <div className='Card ProjectCard'>
                <div className='card-text'><span >{this.props.name}</span></div>
            </div>
        )
    }
}
export default ProjectCard