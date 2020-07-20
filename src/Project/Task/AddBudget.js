import React, { Component } from 'react'

class AddBudget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget_amount: '',
            b_id: this.props.b_id,
            p_id: this.props.p_id,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/tasks/${this.props.t_id}`, {
            method: 'PATCH',
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
                budget_amount: '',
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    render() {
        return (
            <div>
                
                <h3>Add a Budget</h3>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label htmlFor='task-budget-form-amount' className='form-text' >Budget Amount:</label>
                    <input name='budget_amount' value={this.state.budget_amount} 
                    id='task-budget-form-amount' type='number' onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Add Budget</button>
                </form>
            </div>
        )
    }
}
export default AddBudget