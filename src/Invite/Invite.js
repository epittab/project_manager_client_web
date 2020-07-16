import React, { Component } from 'react'

 class Invite extends Component {

    componentDidMount() {

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='Invite transparent'>
                <h2>Invite</h2>
                <div className='total-Invite-container'>
                    <h4>Total Invite</h4>
                </div>
                <form className='total-Invite-detail-container' onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input />
                    <label>Select Role:</label>
                 
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}
export default Invite