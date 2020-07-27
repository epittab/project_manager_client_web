import React, { Component } from 'react'

import {connect} from 'react-redux'
import { postCostForm, costFormCleanup, changeCostForm } from '../../Redux/Actions/costs'

class AddCost extends Component {

    componentWillUnmount() { this.props.cleanup() }
    
    render() {
        return (
            <div>
                
                <h3>Add a Cost</h3>
                <form className='form-body' onSubmit={(e) => this.props.handleSubmit(e, this.props.cost_form, this.props.t_id)}>
                    <label htmlFor='task-cost-form-name' className='form-text' >Cost Name:</label>
                    <input name='cost_name' value={this.props.cost_name} 
                    id='task-cost-form-name' type='text' onChange={this.props.handleChange}/>
                    <br />
                    <label htmlFor='task-cost-form-desc' className='form-text' >Cost Description:</label>
                    <textarea name='cost_description' value={this.props.cost_description} 
                    id='task-cost-form-desc' type='text' onChange={this.props.handleChange}/>
                    <br />
                    <label htmlFor='task-cost-form-start-date' className='form-text' >Cost Type:</label>
                    <select name='cost_type' onChange={this.props.handleChange}
                    id='task-cost-form-type' type='text' >
                        <option value='Labor'>Labor</option>
                        <option value='Material'>Material</option>
                        <option value='Service'>Service</option>
                    </select>
                    <br />
                    <label htmlFor='task-cost-form-amount' className='form-text' >Cost Amount:</label>
                    <input name='cost_amount' value={this.props.cost_amount} 
                    id='task-cost-form-amount' type='number' onChange={this.props.handleChange}/>
                    <br />
                    <button  className='form-button primary' type='submit'>Add Cost</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cleanup: () => {dispatch(costFormCleanup())},
        handleChange: (e) => {dispatch(changeCostForm(e))},
        handleSubmit: (e, form, t_id) => {dispatch(postCostForm(e, form, t_id))}
    }
}
const mapStateToProps = (state) => {
    return {
        cost_form: state.costs.newCostForm,
        cost_name: state.costs.newCostForm.cost_name,
        cost_description: state.costs.newCostForm.cost_description,
        cost_type: state.costs.newCostForm.cost_type,
        cost_amount: state.costs.newCostForm.cost_amount,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddCost)