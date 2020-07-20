import React, { Component } from 'react'

class BlockDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task_name: '',
            task_description: '',
            task_start_date: '',
            task_end_date: '',
            b_id: this.props.b_id,
            p_id: this.props.p_id,
        }
    }

   
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(this.state)
        })
        .then( r => r.json() )
        .then( data => {
            console.log(data)
            this.setState({...this.state, 
                task_name: '',
                task_description: '',
                task_start_date: '',
                task_end_date: '',
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    render() {
        return (
            <div>
                
                <h3>Add a Task</h3>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label htmlFor='task-create-form-name' className='form-text' >Task Name:</label>
                    <input name='task_name' value={this.state.task_name} 
                    id='task-create-form-name' type='text' onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-desc' className='form-text' >Task Description:</label>
                    <textarea name='task_description' value={this.state.task_description} 
                    id='task-create-form-desc' type='text' onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-start-date' className='form-text' >Task Start Date:</label>
                    <input name='task_start_date' value={this.state.task_start_date}  
                    id='task-create-form-start-date' type='date' onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-end-date' className='form-text' >Task End Date:</label>
                    <input name='task_end_date' value={this.state.task_end_date} 
                    id='task-create-form-end-date' type='date' onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
export default BlockDetail