import React, { Component } from 'react'

import {connect} from 'react-redux'

import {postTaskForm, changeTaskForm, taskFormCleanup} from '../../Redux/Actions/tasks'

class NewTask extends Component {
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

    componentWillUnmount(){
        this.props.cleanup()
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


    render() {
        return (
            <div>
                <h3>Add a Task</h3>
                <form className='form-body' onSubmit={(e) => this.props.handleSubmit(e, this.props.task_form, this.props.b_id) }>
                    <label htmlFor='task-create-form-name' className='form-text' >Task Name:</label>
                    <input name='task_name' value={this.props.task_name} 
                    id='task-create-form-name' type='text' onChange={this.props.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-desc' className='form-text' >Task Description:</label>
                    <textarea name='task_description' value={this.props.task_description} 
                    id='task-create-form-desc' type='text' onChange={this.props.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-start-date' className='form-text' >Task Start Date:</label>
                    <input name='task_start_date' value={this.props.task_start_date}  
                    id='task-create-form-start-date' type='date' onChange={this.props.handleChange}/>
                    <br />
                    <label htmlFor='task-create-form-end-date' className='form-text' >Task End Date:</label>
                    <input name='task_end_date' value={this.props.task_end_date} 
                    id='task-create-form-end-date' type='date' onChange={this.props.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e, b_id) => {dispatch(postTaskForm(e, b_id))},
        handleChange: (e) => {dispatch(changeTaskForm(e))},
        cleanup: () => {dispatch(taskFormCleanup())}
    }
}
const mapStateToProps = (state) => {
    return {
        task_form: state.tasks.newTaskForm,
        task_name: state.tasks.newTaskForm.task_name,
        task_description: state.tasks.newTaskForm.task_description,
        task_start_date: state.tasks.newTaskForm.task_start_date,
        task_end_date: state.tasks.newTaskForm.task_end_date,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTask)