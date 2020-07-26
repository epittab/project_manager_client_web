import React, { Component } from 'react'

import {connect} from 'react-redux'

import TaskDetail from './TaskDetail'
import AddCost from './AddCost'
import AddBudget from './AddBudget'
import DisplayCost from './DisplayCost'
import DisplayLCost from './DisplayLCost'

import './Task.css'
import { TOGGLE_TASK_COSTS } from '../../Redux/Actions/types'
import { fetchTask } from '../../Redux/Actions/task'
class TaskCont extends Component {


    constructor(){
        super()
        this.state = {
            showingForm: false,
            task_status:''
        }
    }

    handleComplete = () => {
        fetch(`http://localhost:3001/tasks/${this.props.routeProps.match.params.t_id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                field: 'status_id',
                payload: 5
            })
        })
        .then(r => r.json() )
        .then(data => {
            console.log(data)
        })
    }

    handleStart = () => {
        fetch(`http://localhost:3001/tasks/${this.props.routeProps.match.params.t_id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                field: 'status_id',
                payload: 3
            })
        })
        .then(r => r.json() )
        .then(data => {
            console.log(data)
        })
    }

    componentDidMount(){
       this.props.fetchTask(this.props.routeProps.match.params.t_id)
    }

    renderCosts() {

        let serv_total =  this.props.costs.serv_mat_costs.filter( smt => smt.isService )
        let mat_total =  this.props.costs.serv_mat_costs.filter( smt => !smt.isService )

        return (<div>
                <h3>Labor</h3>
                    { this.props.costs.labor_costs.length > 0 ? 
                        this.props.costs.labor_costs.map((c) => < DisplayLCost cost={c}/>)
                        : <p className='null-text'> There are currently <strong>no Labor costs</strong> reported. </p>}
                <h3>Materials</h3>
                    { mat_total.length > 0 ? 
                        mat_total.map((c) => < DisplayCost cost={c}/>)
                        : <p className='null-text'> There are currently <strong>no Material costs </strong>reported. </p>}
                <h3>Services</h3>
                    { serv_total.length > 0 ? 
                    serv_total.map((c) => < DisplayCost cost={c}/>)
                    : <p className='null-text'> There are currently <strong>no Service costs</strong> reported. </p>}
        </div>)
    }

    renderBudget(){
        return ( <div className='task-wrapper'> 

            <h3>Budgeted Cost</h3>
            
            { this.props.task.budget_amount === undefined || this.props.task.budget_amount === null ? '$0.00' : this.props.task.budget_amount } 
            
            { this.props.task.budget_amount === null ? 
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
                    { (this.props.task_status === 'Completed') ?
                          <button className='action-item'>Done</button> :
                         (this.props.task_status === 'Pending' || this.props.task_status === 'Created') ?
                        <button onClick={this.handleStart} className='action-item cta'>Start</button> :
                        <button onClick={this.handleComplete} className='action-item cta'>Complete</button>}
                </div>)      
    }

    renderGeneral(){
        return (
            <div className='block-wrapper dark-on-light'>
                <p> <strong>Task Name: </strong> {`${this.props.task.task_name}`}</p>
                <p> <strong>Task Desc:</strong> {`${this.props.task.task_description}`}</p>
                <p> <strong>Status:</strong> {`${this.props.task_status}`} </p>
            </div>
        )
    }

    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Task Detail</h2>
                { this.props.task ? this.renderGeneral() : null }
             
                <div>
                    {this.props.task ? this.renderStatus() : null }
                </div>

                <div className='task-wrapper'>
                    <h3>Cost</h3>
                    <div>
                        <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.props.toggleCost}>
                        </div>
                    </div>
                    {this.props.isCostOpen ? < AddCost t_id={this.props.routeProps.match.params.t_id} /> : null }
                    
                   {this.props.task ? this.renderBudget() : null }
              
                </div>

                < TaskDetail />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCost: () => {dispatch({type: TOGGLE_TASK_COSTS})},
        fetchTask: (t_id) => {dispatch(fetchTask(t_id))}
    }
}
const mapStateToProps = (state) => {
    return {
        isCostOpen: state.task.isCostOpen,
        task: state.task.task,
        costs: state.task.costs,
        task_status: state.task.task_status
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskCont)