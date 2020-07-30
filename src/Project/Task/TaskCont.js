import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'

import {connect} from 'react-redux'
import { fetchTask, fetchStartTask, fetchCompleteTask, toggleTaskCosts, deleteTask } from '../../Redux/Actions/tasks'

import AddCost from './AddCost'
import AddBudget from './AddBudget'
import DisplayCost from './DisplayCost'
import DisplayLCost from './DisplayLCost'

import './Task.css'

class TaskCont extends Component {
    
    constructor() {
        super()
        this.state = {
            shouldRedirect: false
        }
    }

    componentDidMount(){
       this.props.fetchTask(this.props.routeProps.match.params.t_id)
    }

    handleDelete = (e) => {
        e.preventDefault()
        this.props.fetchDelete(this.props.routeProps.match.params.t_id)
        this.setState({shouldRedirect: true})
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
                        <button onClick={() => this.props.handleStart(this.props.routeProps.match.params.t_id)} className='action-item cta'>Start</button> :
                        <button onClick={() => this.props.handleComplete(this.props.routeProps.match.params.t_id)} className='action-item cta'>Complete</button>}
                </div>)      
    }

    renderGeneral(){
        return (
            <div className='general-block-wrapper dark-on-light'>
                <p> <strong>Task Name: </strong> {`${this.props.task.task_name}`}</p>
                <p> <strong>Task Desc:</strong> {`${this.props.task.task_description}`}</p>
                <p> <strong>Status:</strong> {`${this.props.task_status}`} </p>
            </div>
        )
    }

    render() {
        let p_id = this.props.routeProps.match.params.p_id
        let b_id = this.props.routeProps.match.params.b_id
        if ( this.state.shouldRedirect ) {
            return < Redirect to={`/projects/${p_id}/blocks/${b_id}`} />
        }
        return (
            <div className='Sheet transparent'>
                <h2>Task Detail</h2>

                < br />
                <Link to={`/projects/${p_id}/blocks/${b_id}`} ><div className='back-bubble'></div></Link>
                < br />

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

                <div className='task-wrapper simple-task'>
                    <h3>Delete Task</h3>
                    <form onSubmit={ (e) => this.handleDelete(e) }>
                        <button className='form-button danger action-item' type='submit'>Delete</button>
                    </form>
             </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCost: () => {dispatch(toggleTaskCosts())},
        fetchTask: (t_id) => {dispatch(fetchTask(t_id))},
        handleStart: (t_id) => {dispatch(fetchStartTask(t_id))},
        handleComplete: (t_id) => {dispatch(fetchCompleteTask(t_id))},
        fetchDelete: (t_id) => {dispatch(deleteTask(t_id))}
    }
}
const mapStateToProps = (state) => {
    return {
        isCostOpen: state.tasks.currTask.isCostOpen,
        task: state.tasks.currTask.task,
        costs: state.tasks.currTask.costs,
        task_status: state.tasks.currTask.task_status
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskCont)