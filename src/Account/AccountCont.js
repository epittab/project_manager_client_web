import React, { Component } from 'react'

import './Account.css'
import UserEditForm from './UserEditForm'

class AccountCont extends Component {
    render() {
        return (
            <div className='Board transparent'>
                < UserEditForm />
            </div>
        )
    }
}
export default AccountCont