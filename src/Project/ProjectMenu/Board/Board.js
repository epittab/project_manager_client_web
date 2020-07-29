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
        let projects_array = this.props.showAll ? this.props.userProjects : this.props.userProjects.filter( up => !up.isComplete )
        return (
            <div className='Board transparent'>
                <div className='card-grid'>
                    <Link className='card-link' to='/projects/new'>< NewCard /></Link>
                    { projects_array.map( (up) => <Link className='card-link' to={`/projects/${up.project.id}`}>< ProjectCard name={up.project.project_name}/></Link>)}
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
        userProjects: state.projects.userProjects,
        showAll: state.projects.showAll,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);