import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchBudget } from '../Redux/Actions/budget'

import './Budget.css'
class Budget extends Component {

    componentDidMount(){
        this.props.fetchBudget(this.props.routeProps.match.params.p_id)
    }

    renderTotal(){
        return (
            <div className='total-budget-container'>
                <h4>Total Budget</h4>
                <p> ${this.props.budget.total_budget.toFixed(2)}</p>
            </div>
        )
    }

    renderTable(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Budgeted Exp.</th>
                        <th>Real. Labor Exp.</th>
                        <th>Real. Service Exp.</th>
                        <th>Real. Material Exp.</th>
                        <th>Difference</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.budget.budget_per_task.map(bpt => { 
                        
                        let budget_total = bpt.budget ? parseFloat(bpt.budget) : 0
                        let labor_total =  bpt.labor_costs.length > 0 ? bpt.labor_costs.map( lc=> (lc.calculated_cost )).reduce( (acc, cur) => acc + cur ) : (0.00) 
                        let serv_total =  bpt.serv_mat_costs.filter( smt => smt.isService ).length > 0 ? bpt.serv_mat_costs.filter( smt => smt.isService).map( sm => sm.serv_mat_cost ).reduce( (acc, cur) => acc + cur ) : (0.00)
                        let mat_total =  bpt.serv_mat_costs.filter( smt => !smt.isService).length > 0 ? bpt.serv_mat_costs.filter( smt => !smt.isService).map( sm => sm.serv_mat_cost ).reduce( (acc, cur) => acc + cur ) : (0.00)
                        let difference = budget_total - (labor_total + serv_total + mat_total)
                        
                        return (<tr> 
                        <td>{bpt.task}</td>
                        { budget_total === (0.00) ? <td className='null-text'> ${budget_total.toFixed(2) }</td> : <td > ${budget_total.toFixed(2) }</td> }
                        { labor_total === (0.00) ? <td className='null-text'> ${labor_total.toFixed(2) }</td> : <td > ${labor_total.toFixed(2) }</td> }
                        { serv_total === (0.00) ? <td className='null-text'> ${serv_total.toFixed(2) }</td> : <td > ${serv_total.toFixed(2) }</td> }
                        { mat_total === (0.00) ? <td className='null-text'> ${mat_total.toFixed(2) }</td> : <td > ${mat_total.toFixed(2) }</td> }
                        { difference === (0.00) ? <td className='null-text'> ${difference.toFixed(2) }</td> : difference < (0.00) ? <td className='bad-text'> ${difference.toFixed(2) }</td> : <td > ${difference.toFixed(2) }</td> }
                    </tr>)}
                    
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Budget</h2>
                    { this.props.budget ? this.renderTotal() : null }
                <div className='total-budget-detail-container'>
                    { (this.props.budget && this.props.budget.budget_per_task.length > 0)  
                    ? this.renderTable() 
                    : null }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBudget: (project_id) => {dispatch(fetchBudget(project_id))}
    }
}

const mapStateToProps = (state) => {
    return {
        budget: state.budget.budget
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)