import React, { Component } from 'react'

import TaskDetail from './TaskDetail'
import AddCost from './AddCost'
import AddBudget from './AddBudget'
import DisplayCost from './DisplayCost'
import DisplayLCost from './DisplayLCost'

import './Task.css'
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
            let {task, costs, task_status } = data 
            this.setState({...this.state, task, costs, task_status })
        })
        .catch( err => {console.log(err)})
    }

    toggleForm = () => {
        this.setState({showingForm: !this.state.showingForm})
    }

    renderCosts() {
        return (<div>
                <h3>Labor</h3>
                    { this.state.costs.labor_costs.length > 0 ? 
                        this.state.costs.labor_costs.map((c) => < DisplayLCost cost={c}/>)
                        : <p className='null-text'> There are currently <strong>no Labor costs</strong> reported. </p>}
                <h3>Materials</h3>
                    { this.state.costs.serv_mat_costs.length > 0 ? 
                        this.state.costs.serv_mat_costs.map((c) => < DisplayCost cost={c}/>)
                        : <p className='null-text'> There are currently <strong>no Material costs </strong>reported. </p>}
                <h3>Services</h3>
                    { this.state.costs.serv_mat_costs.length > 0 ? 
                    this.state.costs.serv_mat_costs.map((c) => < DisplayCost cost={c}/>)
                    : <p className='null-text'> There are currently <strong>no Service costs</strong> reported. </p>}
        </div>)
    }

    renderBudget(){
        return ( <div className='task-wrapper'> 

            <h3>Budgeted Cost</h3>
            
            { this.state.task.budget_amount === undefined || this.state.task.budget_amount === null ? '$0.00' : this.state.task.budget_amount } 
            
            { this.state.task.budget_amount === null ? 
            <>
            <div>Allocate Funds</div>
            < AddBudget t_id={this.props.routeProps.match.params.t_id} />
            </>
            : null }

            <h3>Line Items</h3>
            
            { this.renderCosts() }
            
            </div>)
    }

    renderStatus(){
        return (<div className='task-wrapper simple-task'>
                    <h3>Change Status</h3>
                    { (this.state.task_status === 'Pending' || this.state.task_status === 'Created') ?
                        <button className='action-item cta'>Start</button> :
                        <button className='action-item cta'>Complete</button>}
                </div>)      
    }

    renderGeneral(){
        return (
            <div className='block-wrapper dark-on-light'>
                <p> <strong>Task Name: </strong> {`${this.state.task.task_name}`}</p>
                <p> <strong>Task Desc:</strong> {`${this.state.task.task_description}`}</p>
                <p> <strong>Status:</strong> {`${this.state.task_status}`} </p>
            </div>
        )
    }

    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Task Detail</h2>
                { this.state.task ? this.renderGeneral() : null }
             
                <div>
                    {this.state.task ? this.renderStatus() : null }
                </div>

                <div className='task-wrapper'>
                    <h3>Cost</h3>
                    <div>
                        <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.toggleForm}>
                        </div>
                    </div>
                    {this.state.showingForm ? < AddCost t_id={this.props.routeProps.match.params.t_id} /> : null }
                    
                   {this.state.task ? this.renderBudget() : null }
              
                </div>

                < TaskDetail />
            </div>
        )
    }
}
export default TaskCont