import React, { Component } from 'react'

import TaskDetail from './TaskDetail'
import AddCost from './AddCost'

class TaskCont extends Component {


    constructor(){
        super()
        this.state = {
            showingForm: false
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/tasks/${this.props.routeProps.match.params.t_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({...this.state, task: data })
        })
        .catch( err => {console.log(err)})
    }

    toggleForm = () => {
        this.setState({showingForm: !this.state.showingForm})
    }

    renderBudget(){
        return ( <div> 

            <h3>Budgeted Cost</h3>
            
            { this.state.task.budget === undefined || this.state.task.budget === null ? '$0.00' : this.state.task.budget } 
            
            { this.state.task.budget === null ? <div>Allocate Funds</div>: null }

            <h3>Line Items</h3>

            
            </div>)
    }

    renderStatus(){
        return (<div>
                    <h3>Change Status</h3>
                    {this.state.task.status === 'pending' ? 'start' : 'complete'}
                </div>)      
    }

    renderGeneral(){
        return (
            <div className='block-wrapper dark-on-light'>
                <p> <strong>Task Name: </strong> {`${this.state.task.task_name}`}</p>
                <p> <strong>Task Desc:</strong> {`${this.state.task.task_description}`}</p>
                <p> <strong>Status:</strong> PENDING </p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Task Detail</h2>
                { this.state.task ? this.renderGeneral() : null }
             
                <div>
                    {this.state.task ? this.renderStatus() : null }
                </div>

                <div>
                    <h3>Cost</h3>
                    <div>
                        <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.toggleForm}>
                        </div>
                    </div>
                    {this.state.showingForm ? < AddCost /> : null }
                    
                   {this.state.task ? this.renderBudget() : null }
              
                </div>

                < TaskDetail />
            </div>
        )
    }
}
export default TaskCont