import React, { Component } from 'react'

import {connect} from 'react-redux'
class UserEditForm extends Component {

    constructor(){
        super()
        this.state = {
            cost: 0.00,
            form: {}

        }
    }

    handleChange = (e) => {
        
    }

    handleChangeCost = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {

    }

    handleSubmitCost = (e) => {

    }
    

    render() {
        return (
            <div>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-label' htmlFor='uf-first-name'>First Name: </label>
                    <input type='text' value={this.state.form.first_name} 
                            name='first_name' id='uf-first-name'  
                            onChange={this.handleChange}/>
                           
                    <label className='form-label' htmlFor='uf-last-name'>Last Name: </label>
                    <input type='text' value={this.state.form.last_name} 
                            name='last_name' id='uf-last-name' 
                            onChange={this.handleChange}/>
                        
                    <label className='form-label' htmlFor='uf-username'>Username: </label>
                    <input type='text' value={this.state.form.username} 
                            name='username' id='uf-username' 
                            onChange={this.handleChange}/>
                        
                    <label className='form-label' htmlFor='uf-password'>Password: </label>
                    <input type='password' value={this.state.form.password} 
                            name='password' id='uf-password'  
                            onChange={this.handleChange}/>
                      
                    <button className='form-button' type='submit'>Submit</button>
                </form>
                <form className='form-body'  onSubmit={this.handleSubmitCost}>
                    <label className='form-label' htmlFor='uf-cost'>Hourly Cost:</label>
                    <input type='number' value={this.state.cost} name='cost' 
                    id='uf-cost'  onChange={this.handleChangeCost}/>
                    
                    <button className='form-button' type='submit'>Submit</button>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)