import React, { Component } from 'react'

import EditButton from '../Components/EditButton'

import {connect} from 'react-redux'
import { patchUserCostForm, fetchUserDetails, toggleUser, toggleUserCost, changeUser, changeUserCost, cleanupUser, cleanupUserCost} from '../Redux/Actions/edituser'
class UserEditForm extends Component {

   componentWillUnmount(){
       this.props.cleanupUserCostForm()
       this.props.cleanupUserForm()

   }

    componentDidMount(){
        this.props.getUserDetails()
    }

    toggleUserForm = () => {
        if (this.props.isEditUser) {
            this.props.cleanupUserForm()
        }
        this.props.toggleUserEdit()
       
    }
    
    toggleCost = () => {
        this.props.cleanupUserCostForm()
        this.props.toggleUserCostEdit()
       
    }

    handleSubmit = () => {
        console.log('to do')
    }

    renderUser(){
        return (<div>
                    <h3>User Details:</h3>
                        < br/>
                        < br/>
                    <p><span className='text-title'>Name: </span> {`${this.props.d_first_name} ${this.props.d_last_name}`}</p>
                    <p><span className='text-title'>User Name: </span> {`${this.props.d_username}`}</p>
                    

                    <div className='Account-Edit-button' onClick={this.toggleUserForm}>< EditButton size={2}  /></div>

                </div>)
    }
    
    renderCost(){
        let userCost = '';
        this.props.cost ? userCost = `$ ${this.props.cost}` : userCost = `You are priceless, so you must have a cost greater than 0. Please submit your hourly cost.`
        return (
            <div>
                <p><span className='text-title'>Cost per hour: </span> { this.props.cost ? `${userCost}` : <span className='null-text'>{`${userCost}`}</span>}</p>
                <div className='Account-Edit-button' onClick={this.toggleCost}>< EditButton size={2}  /></div>
            
            </div>
            )
    }


    renderEditUser(){
        return (<form className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-label' htmlFor='uf-first-name'>First Name: </label>
                    <input type='text' value={this.props.first_name} 
                            name='first_name' id='uf-first-name'  
                            onChange={(e) => this.props.handleChangeUser(e)}/>
                        
                    <label className='form-label' htmlFor='uf-last-name'>Last Name: </label>
                    <input type='text' value={this.props.last_name} 
                            name='last_name' id='uf-last-name' 
                            onChange={(e) => this.props.handleChangeUser(e)}/>
                   
                    <label className='form-label' htmlFor='uf-password'>Password: </label>
                    <input type='password' value={this.props.password} 
                            name='password' id='uf-password'  
                            onChange={(e) => this.props.handleChangeUser(e)}/>
                    
                    < br />
                    <button className='form-button' onClick={this.toggleUserForm}>Cancel</button>
                    < br />
                    <button className='form-button primary' type='submit'>Submit</button>
                </form>)
    }

    renderEditCost(){
        return (<form className='form-body'  onSubmit={(e) => this.props.submitUserCost(e, this.props.form_cost)}>
                    <label className='form-label' htmlFor='uf-cost'>Cost per hour:</label>
                    <input type='number' value={this.props.form_cost} name='form_cost' 
                    id='uf-cost'  onChange={(e) => this.props.handleChangeUserCost(e)}/>
                    < br />
                    <button className='form-button' onClick={this.toggleCost}>Cancel</button>
                    < br />
                    <button className='form-button primary' type='submit'>Submit</button>
                </form>)
    }
    

    render() {
        return (
            < div className='Account-Section'>
               
                <div className='subsection-wrapper'>
                    { this.props.isEditUser ? this.renderEditUser() : this.renderUser()}
                <div className='dividing-line'></div>
                    { this.props.isEditCost ? this.renderEditCost() : this.renderCost()}
                </div>
                
                <div className='subsection-wrapper'>
                        <form className='form-wrapper' onSubmit={ this.handleDelete }>
                            <p>DELETE ACCOUNT:</p>
                            <button className='form-button danger action-item' type='submit'>Delete</button>
                        </form>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetails: ()=>{ dispatch(fetchUserDetails()) },
        toggleUserEdit: ()=>{ dispatch(toggleUser()) },
        toggleUserCostEdit: ()=>{ dispatch(toggleUserCost()) },
        handleChangeUser: (e)=>{ dispatch(changeUser(e)) },
        handleChangeUserCost: (e)=>{ dispatch(changeUserCost(e)) }, 
        cleanupUserForm: (e)=>{ dispatch(cleanupUser(e)) }, 
        cleanupUserCostForm: (e)=>{ dispatch(cleanupUserCost(e)) }, 
        submitUserCost: (e, form)=>{ dispatch(patchUserCostForm(e, form)) }, 
    }
}
const mapStateToProps = (state) => {
    return {
        d_first_name: state.edituser.first_name,
        d_last_name: state.edituser.last_name,
        d_username: state.edituser.username,
        first_name: state.edituser.form.first_name,
        last_name: state.edituser.form.last_name,
        password: state.edituser.form.password,
        cost: state.edituser.cost,
        form_cost: state.edituser.form_cost,
        isEditUser: state.edituser.isEditingUser,
        isEditCost: state.edituser.isEditingUserCost,
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)