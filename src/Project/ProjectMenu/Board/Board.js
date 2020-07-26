import React, { Component } from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import ProjectCard from './Cards/ProjectCard'
import NewCard from './Cards/NewCard'

import './Board.css'
import { fetchAllProjects, projectCleanup } from '../../../Redux/Actions/projects'

class Board extends Component {
    
    componentDidMount(){ 
        this.props.getProjects()
        this.props.projectCleanup()
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

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => { dispatch(fetchAllProjects()) },
        projectCleanup: () => { dispatch(projectCleanup())}
    }
}

const mapStateToProps = (state) => {
    return {
        userProjects: state.projects.userProjects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);