import React, { Component } from 'react'

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
                <p> {this.state.budget.total_budget}</p>
            </div>
        )
    }

    renderTable(){
        return (
            <tbody>
                {this.state.budget.budget_per_task.map(bpt => (<tr> 
                    <td>{bpt.task}</td>
                    <td>{bpt.budget}</td>
                    <td>Realized Labor</td>
                    <td>Realized Service</td>
                    <td>Realized Material</td>
                    <td>Difference</td>
                </tr>))}
            </tbody>
        )
    }

    render() {
        return (
            <div className='Board transparent'>
                <h2>Budget</h2>
                { this.state.budget ? this.renderTotal() : null }
                <div className='total-budget-detail-container'>
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
                        { this.state.budget ? this.renderTable() : null }
                    </table>
                    <h4>Labor</h4>
                    <div>L costs</div>
                    <h4>Materials</h4>
                    <div>M costs</div>
                    <h4>Services</h4>
                    <div>S costs</div>
                </div>
            </div>
        )
    }
}
export default Budget