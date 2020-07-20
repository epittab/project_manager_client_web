import React, { Component } from 'react'

class AddCost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cost_name: '',
            cost_description: '',
            cost_type: '',
            cost_amount: '',
            b_id: this.props.b_id,
            p_id: this.props.p_id,
        }
    }

   
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/costs', {
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
                cost_name: '',
                cost_description: '',
                cost_type: '',
                cost_amount: '',
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    render() {
        return (
            <div>
                
                <h3>Add a Cost</h3>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label htmlFor='task-cost-form-name' className='form-text' >Cost Name:</label>
                    <input name='cost_name' value={this.state.cost_name} 
                    id='task-cost-form-name' type='text' onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='task-cost-form-desc' className='form-text' >Cost Description:</label>
                    <textarea name='cost_description' value={this.state.cost_description} 
                    id='task-cost-form-desc' type='text' onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='task-cost-form-start-date' className='form-text' >Cost Type:</label>
                    <select name='task_type' 
                    id='task-cost-form-type' type='text' >
                        <option value='labor' onChange={this.handleChange}>Labor</option>
                        <option value='material' onChange={this.handleChange}>Material</option>
                        <option value='service' onChange={this.handleChange}>Service</option>
                    </select>
                    <br />
                    <label htmlFor='task-cost-form-amount' className='form-text' >Cost Amount:</label>
                    <input name='cost_amount' value={this.state.cost_amount} 
                    id='task-cost-form-amount' type='number' onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Add Cost</button>
                </form>
            </div>
        )
    }
}
export default AddCost