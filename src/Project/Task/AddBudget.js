import React, { Component } from 'react'

import {connect} from 'react-redux'
import { changeTaskBudget, submitTaskBudget } from '../../Redux/Actions/tasks'

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

    
    render() {
        return (
            <div>
                
                <h3>Add a Budget</h3>
                <form className='form-body' onSubmit={ (e) => this.props.onSubmitBudget(e, this.props.budget_amount, this.props.t_id) }>
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
        onChangeBudget: (e) => { dispatch(changeTaskBudget(e.target.value)) },
        onSubmitBudget: (e, form, t_id) => { dispatch(submitTaskBudget(e, form, t_id)) },
    }
}

const mapStateToProps = (state) => {
    return {
        budget_amount: state.tasks.currTask.budget_amount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBudget)