import React, { Component } from 'react'

import {connect} from 'react-redux'
import { changeTaskBudget } from '../../Redux/Actions/task'

class AddBudget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            b_id: this.props.b_id,
            p_id: this.props.p_id,
        }
    }

    componentWillUnmount(){

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/tasks/${this.props.t_id}/budget`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({b_id: this.state.b_id, 
                                p_id: this.state.p_id, 
                                budget_amount: this.props.budget_amount})
        })
        .then( r => r.json() )
        .then( data => {
            console.log(data)
            this.setState({...this.state, 
                budget_amount: '',
            })
        })
    }
    
    render() {
        return (
            <div>
                
                <h3>Add a Budget</h3>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label htmlFor='task-budget-form-amount' className='form-text' >Budget Amount:</label>
                    <input name='budget_amount' value={this.props.budget_amount} 
                    id='task-budget-form-amount' type='number' onChange={this.props.onChangeBudget}/>
                    <br />
                    <button  className='form-button primary' type='submit'>Add Budget</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeBudget: (e) => { dispatch(changeTaskBudget(e.target.value)) }
    }
}

const mapStateToProps = (state) => {
    return {
        budget_amount: state.task.budget_amount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBudget)