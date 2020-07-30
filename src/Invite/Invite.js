import React, { Component } from 'react'

import './Invite.css'

 class Invite extends Component {

    componentDidMount() {

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Invite</h2>
                <div className='total-Invite-container'>
                    <h4>Total Invite</h4>
                </div>
                <form className='Invite-form' onSubmit={this.handleSubmit}>
                    <label className='form-text'>Username: </label>
                    <input className='form-option' />
                    <label className='form-text'>Select Role:</label>
                    <select name='role_type' className='form-option'
                    id='invite-form-type' type='text' >
                        <option value='Owner'>Owner</option>
                        <option value='Contributor'>Contributor</option>
                    </select>
                    < br/>
                    <button className='form-button primary' type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}
export default Invite