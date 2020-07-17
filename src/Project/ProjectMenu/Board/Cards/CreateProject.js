import React, { Component } from 'react'

import './CreateProject.css'

class CreateProject extends Component {
    constructor(){
        super()
        this.state = {
            project_name: '',
            project_description: '',
            est_start_date: '',
            est_end_date: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/projects`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (<div className = 'Board transparent'> 
                
                
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <h2>New Project</h2>
                    <label className='form-text' htmlFor='new-project-form-name'>Project Name: </label>
                    <input id='new-project-form-name' type='text' name='project_name' 
                    value={this.state.project_name}
                    onChange={this.handleChange}
                    />
                    <br />
                    <label className='form-text' htmlFor='new-project-form-description'>Project Description: </label>
                    <textarea id='new-project-form-name' type='text' name='project_description'  
                    value={this.state.project_description}
                    onChange={this.handleChange} />
                    <br />

                    <label className='form-text' htmlFor='new-project-form-start-date'>Project Est. Start Date: </label>
                    <input id='new-project-form-start-date' type='date' name='est_start_date' 
                    value={this.state.est_start_date}
                    onChange={this.handleChange} />
                    <br />

                    <label className='form-text' htmlFor='new-project-form-end-date'>Project Est. End Date: </label>
                    <input id='new-project-form-end-date' type='date' name='est_end_date' 
                    value={this.state.est_end_date}
                    onChange={this.handleChange} />
                    <br />

                    <button className='form-button' type='submit' >Submit</button>
                </form>
            </div> )
        }
    }


export default CreateProject;