import React, { Component } from 'react'

import {connect} from 'react-redux'
import {changeProjectForm, postProjectForm, projectFormCleanup} from '../../../../Redux/Actions/projects'

import './CreateProject.css'

class CreateProject extends Component {

    componentWillUnmount() {
        this.props.handleProjectFormCleanup()
    }

    render() {
        return (<div className = 'Sheet transparent'> 
                
                <form className='form-body' onSubmit={ (e) => this.props.handlePostProjectForm(e, this.props.new_project) }>
                    <h3>New Project</h3>
                    <label className='form-text' htmlFor='new-project-form-name'>Project Name: </label>
                    <input id='new-project-form-name' type='text' name='project_name' 
                    value={this.props.project_name}
                    onChange={this.props.handleChangeProjectForm}
                    />
                 
                    <label className='form-text' htmlFor='new-project-form-description'>Project Description: </label>
                    <textarea id='new-project-form-name' type='text' name='project_description'  
                    rows="5" cols="60"
                    value={this.props.project_description}
                    onChange={this.props.handleChangeProjectForm} />
                    

                    <label className='form-text' htmlFor='new-project-form-start-date'>Project Est. Start Date: </label>
                    <input id='new-project-form-start-date' type='date' name='est_start_date' 
                    value={this.props.est_start_date}
                    onChange={this.props.handleChangeProjectForm} />
                   

                    <label className='form-text' htmlFor='new-project-form-end-date'>Project Est. End Date: </label>
                    <input id='new-project-form-end-date' type='date' name='est_end_date' 
                    value={this.props.est_end_date}
                    onChange={this.props.handleChangeProjectForm} />
                    <br />

                    <button className='form-button primary' type='submit' >Submit</button>
                </form>
            </div> )
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            handleChangeProjectForm: (e) => {dispatch(changeProjectForm(e))},
            handleProjectFormCleanup: () => {dispatch(projectFormCleanup())},
            handlePostProjectForm: (e, form) => {dispatch(postProjectForm(e, form))}
        }
    }
    const mapStateToProps = (state) => {
        return {
            project_name: state.projects.newProjectForm.project_name,
            project_description: state.projects.newProjectForm.project_description,
            est_start_date: state.projects.newProjectForm.est_start_date,
            est_end_date: state.projects.newProjectForm.est_end_date,
            new_project: state.projects.newProjectForm
        }
    }
    

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);