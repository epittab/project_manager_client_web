import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './CreateProject.css'

class CreateProject extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return ReactDOM.createPortal(
            this.props.display ?
            (<div className = 'modal-container'> 
                <div className = 'modal-background' onClick={this.props.toggle}></div>
                
                <form className = 'modal-content' onSubmit={this.handleSubmit}>
                    <h2>New Project</h2>
                    <label className='new-project-form-label' htmlFor='new-project-form-name'>Project Name: </label>
                    <input className='new-project-form-input' id='new-project-form-name' type='text' name='project_name' />
                    <br />
                    <label className='new-project-form-label' htmlFor='new-project-form-description'>Project Description: </label>
                    <textarea className='new-project-form-textarea' id='new-project-form-name' type='text' name='project_description' />
                    <br />

                    <label className='new-project-form-label' htmlFor='new-project-form-start-date'>Project Est. Start Date: </label>
                    <input className='new-project-form-input' id='new-project-form-start-date' type='date' name='est_start_date' />
                    <br />

                    <label className='new-project-form-label' htmlFor='new-project-form-end-date'>Project Est. End Date: </label>
                    <input className='new-project-form-input' id='new-project-form-end-date' type='date' name='est_end_date' />
                    <br />

                    <button type='submit' >Submit</button>
                </form>
            </div> ): 
            (null)
            , document.getElementById('portal')
        )
    }
}

export default CreateProject;