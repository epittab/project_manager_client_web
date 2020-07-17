import React, { Component } from 'react'

 class Invite extends Component {

    componentDidMount() {

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='Board transparent'>
                <h2>Invite</h2>
                <div className='total-Invite-container'>
                    <h4>Total Invite</h4>
                </div>
                <form className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-text'>Username: </label>
                    <input />
                    <label className='form-text'>Select Role:</label>
                 
                    <button className='form-button' type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}
export default Invite