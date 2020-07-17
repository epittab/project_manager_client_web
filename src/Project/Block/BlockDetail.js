import React, { Component } from 'react'

class BlockDetail extends Component {
    constructor() {
        super()
        this.state = {
            task_name: '',
            task_description: '',
            task_start_date: '',
            task_end_date: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    render() {
        return (
            <div>
                <h2>Block Detail</h2>

                <div>
                    Task List
                </div>

                <h3>Add a Task</h3>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-text' >Task Name:</label>
                    <input name='task_name' value={this.state.task_name} className='' id='' type='text' onChange={this.handleChange}/>
                    <br />
                    <label className='form-text' >Task Description:</label>
                    <textarea name='task_description' value={this.state.task_description} className='' id='' type='text' onChange={this.handleChange}/>
                    <br />
                    <label className='form-text' >Task Start Date:</label>
                    <input name='task_start_date' value={this.state.task_start_date} className='' id='' type='date' onChange={this.handleChange}/>
                    <br />
                    <label className='form-text' >Task End Date:</label>
                    <input name='task_end_date' value={this.state.task_end_date} className='' id='' type='date' onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
export default BlockDetail