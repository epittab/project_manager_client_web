import React, { Component } from 'react'

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

    }

    handleSubmit = (e) => {

    }

    handleSubmitCost = (e) => {

    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className='user-form-label' htmlFor='uf-first-name'>First Name: </label>
                    <input type='text' value={this.state.form.first_name} 
                            name='first_name' id='uf-first-name' className='user-form-input' 
                            onChange={this.handleChange}/>
                    <label className='user-form-label' htmlFor='uf-last-name'>Last Name: </label>
                    <input type='text' value={this.state.form.last_name} 
                            name='last_name' id='uf-last-name' className='user-form-input' 
                            onChange={this.handleChange}/>
                    <label className='user-form-label' htmlFor='uf-username'>Username: </label>
                    <input type='text' value={this.state.form.username} 
                            name='username' id='uf-username' className='user-form-input' 
                            onChange={this.handleChange}/>
                    <label className='user-form-label' htmlFor='uf-password'>Password: </label>
                    <input type='password' value={this.state.form.password} 
                            name='password' id='uf-password' className='user-form-input' 
                            onChange={this.handleChange}/>
                </form>
                <form onSubmit={this.handleSubmitCost}>
                    <label className='user-form-label' htmlFor='uf-cost'>Hourly Cost:</label>
                    <input type='number' value={this.state.cost} name='cost' 
                    id='uf-cost' className='user-form-input' onChange={this.handleChangeCost}/>
                </form>
            </div>
        )
    }
}
export default UserEditForm