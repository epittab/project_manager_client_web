import React, { Component } from 'react'

import {connect} from 'react-redux'

import './Budget.css'
 class Budget extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){

        fetch(`http://localhost:3001/projects/${this.props.routeProps.match.params.p_id}/budget`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({budget: data})
        })
        .catch((err) => {console.log(err)})

    }

    renderTotal(){
        return (
            <div className='total-budget-container'>
                <h4>Total Budget</h4>
                <p> ${this.state.budget.total_budget.toFixed(2)}</p>
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
                    {this.state.budget.budget_per_task.map(bpt => { 
                        
                        let budget_total = bpt.budget ? parseFloat(bpt.budget) : 0
                        let labor_total =  bpt.labor_costs.length > 0 ? bpt.labor_costs.map( lc=> lc.labor_cost ).reduce( (acc, cur) => acc + cur ) : (0.00) 
                        let serv_total =  bpt.serv_mat_costs.filter( smt => smt.isService ).length > 0 ? bpt.serv_mat_costs.filter( smt => smt.isService).map( sm => sm.serv_mat_cost ).reduce( (acc, cur) => acc + cur ) : (0.00)
                        let mat_total =  bpt.serv_mat_costs.filter( smt => !smt.isService).length > 0 ? bpt.serv_mat_costs.filter( smt => !smt.isService).map( sm => sm.serv_mat_cost ).reduce( (acc, cur) => acc + cur ) : (0.00)
                        let difference = budget_total - (labor_total + serv_total + mat_total)
                        
                        return (<tr> 
                        <td>{bpt.task}</td>
                        <td> ${budget_total.toFixed(2) }</td>
                        <td> ${labor_total.toFixed(2) }</td>
                        <td> ${serv_total.toFixed(2) }</td>
                        <td> ${mat_total.toFixed(2) }</td>
                        <td> ${ difference.toFixed(2) } </td>
                    </tr>)}
                    
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div className='Board transparent'>
                <h2>Budget</h2>
                    { this.state.budget ? this.renderTotal() : null }
                <div className='total-budget-detail-container'>
                    { (this.state.budget && this.state.budget.budget_per_task.length > 0)  
                    ? this.renderTable() 
                    : null }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Budget)