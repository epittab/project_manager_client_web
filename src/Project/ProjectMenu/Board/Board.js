import React, { Component } from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import ProjectCard from './Cards/ProjectCard'
import NewCard from './Cards/NewCard'

import './Board.css'

class Board extends Component {
    
    componentDidMount(){
        fetch('http://localhost:3001/projects', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(user_projects => {
            this.props.dispatch({
                type: 'FETCH_PROJECTS',
                payload: user_projects })
            // this.setState({userProjects: user_projects})
        })
    }

    render() {
        return (
            <div className='Board transparent'>
                <div className='card-grid'>
                    <Link className='card-link' to='/projects/new'>< NewCard /></Link>
                    { this.props.userProjects.map( (up) => <Link className='card-link' to={`/projects/${up.id}`}>< ProjectCard name={up.project_name}/></Link>)}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProjects: state.projects.userProjects
    }
}

export default connect(mapStateToProps)(Board);