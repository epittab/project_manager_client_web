import React, { Component } from 'react'

import EditButton from '../../Components/EditButton'
import DeleteButton from '../../Components/DeleteButton'
import NewTask from '../Task/NewTask'

import {connect} from 'react-redux'
import { fetchBlock, fetchDeleteBlock } from '../../Redux/Actions/blocks'
import { toggleTaskForm } from '../../Redux/Actions/tasks'

import {Link} from 'react-router-dom'

class BlockDetail extends Component {
      
    componentDidMount() {
        this.props.getBlock(this.props.routeProps.match.params.b_id)
        //fetch current block
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
            let {tasks} = this.state.block
            tasks = [...tasks, data]
            
            this.setState({...this.state, 
                block: {...this.state.block.block, tasks: tasks},
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


    renderGeneral(){
        return (
            <div className='block-wrapper dark-on-light'>
                <p> <strong>Block Name: </strong> {`${this.props.block.block_name}`}</p>
                <p> <strong>Block Desc:</strong> {`${this.props.block.block_description}`}</p>
                <p> <strong>Status:</strong> PENDING </p>
            </div>
        )
    }

    renderTasks(){
        let p_id = this.props.routeProps.match.params.p_id
        let b_id = this.props.routeProps.match.params.b_id
        return (
            <div className=''>
                { (this.props.tasks.length > 0) ?
                this.props.tasks.map( task => 
                 <div className='block-task-wrapper transparent'>
                    <div className='task-info-wrapper'>
                        <p> <strong>Task Name: </strong> {`${task.task_name}`}</p>
                        <p> <strong>Task Description:</strong> {`${task.task_description}`}</p>
                        <div className='time-wrapper'>
                            <p> <strong>Est. Start Date:</strong> {`${task.est_start_date}`}</p>
                            <p> <strong>Est. End Date:</strong> {`${task.est_end_date}`}</p>
                        </div>
                    </div>
                    <div className='block-wrapper-grid-buttons'>
                        <Link to={`/projects/${p_id}/blocks/${b_id}/tasks/${task.id}`}>< EditButton size={2} /></Link>
                        < DeleteButton size={2}/>
                    </div>
                    
                 
                </div>) :
                <p>This block currently does not have any tasks</p>
            
            }
            </div>
        )
    }
    
    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Block Detail</h2>

                    {this.props.block ? this.renderGeneral() : null }

                <div>
                    Task List
                </div>

                <div>
                    <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.props.toggleNewTask}>
                    </div>
                    { this.props.isTaskFormOpen 
                    ? <NewTask p_id={this.props.p_id} b_id={this.props.routeProps.match.params.b_id}/> 
                    : null}
                    {this.props.block ? this.renderTasks() : null }
                </div>
                <div className='block-wrapper transparent'>
                        <form onSubmit={ () => this.props.deleteBlock(this.props.routeProps.match.params.b_id) }>
                            <p>DELETE BLOCK</p>
                            <button className='form-button danger action-item' type='submit'>Delete</button>
                        </form>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlock: (b_id) => {dispatch(fetchBlock(b_id))},
        deleteBlock: (b_id) => {dispatch(fetchDeleteBlock(b_id))},
        toggleNewTask: () => {dispatch(toggleTaskForm())},
    }
}
const mapStateToProps = (state) => {
    return {
        blocks: state.projects.currProject,
        block: state.blocks.currBlock.block,
        tasks: state.blocks.currBlock.tasks,
        isTaskFormOpen: state.tasks.isNewTaskOpen,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockDetail)