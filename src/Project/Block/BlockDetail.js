import React, { Component } from 'react'

import EditButton from '../../Components/EditButton'
import DeleteButton from '../../Components/DeleteButton'
import NewTask from '../Task/NewTask'

import {Link} from 'react-router-dom'

class BlockDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingForm: false,
            b_id: this.props.routeProps.match.params.b_id,
            p_id: this.props.routeProps.match.params.p_id,
        }
    }

   
    componentDidMount() {
        fetch(`http://localhost:3001/blocks/${this.props.routeProps.match.params.b_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({...this.state, block: data })
        })
        .catch( err => {console.log(err)})
    }

    handleDelete = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/blocks/${this.props.routeProps.match.params.b_id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            // ELIMINATE block from state
            this.setState({...this.state, block: data })
        })
        .catch( err => {console.log(err)})
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

    toggleForm = () => {
        this.setState({showingForm: !this.state.showingForm})
    }

    renderGeneral(){
        return (
            <div className='block-wrapper dark-on-light'>
                <p> <strong>Block Name: </strong> {`${this.state.block.block.block_name}`}</p>
                <p> <strong>Block Desc:</strong> {`${this.state.block.block.block_description}`}</p>
                <p> <strong>Status:</strong> PENDING </p>
            </div>
        )
    }

    renderTasks(){
        return (
            <div className=''>
                { (this.state.block.tasks.length > 0) ?
                this.state.block.tasks.map( task => 
                 <div className='block-wrapper transparent'>
                    <div>
                        <p> <strong>Task Name: </strong> {`${task.task_name}`}</p>
                        <p> <strong>Task Description:</strong> {`${task.task_description}`}</p>
                        <div className='time-wrapper'>
                            <p> <strong>Est. Start Date:</strong> {`${task.est_start_date}`}</p>
                            <p> <strong>Est. End Date:</strong> {`${task.est_end_date}`}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/projects/${this.state.p_id}/blocks/${this.state.b_id}/tasks/${task.id}`}>< EditButton size='1.2rem' /></Link>
                        < DeleteButton size='1.2rem'/>
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

                    {this.state.block ? this.renderGeneral() : null }

                <div>
                    Task List
                </div>

                <div>
                    <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.toggleForm}>
                    </div>
                    { this.state.showingForm 
                    ? <NewTask p_id={this.state.p_id} b_id={this.state.b_id}/> 
                    : null}
                    {this.state.block ? this.renderTasks() : null }
                </div>
                <div className='block-wrapper transparent'>
                        <p>DELETE BLOCK</p>
                        <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}
export default BlockDetail