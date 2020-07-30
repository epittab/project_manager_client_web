import React, { Component } from 'react'

import {connect} from 'react-redux'

import './Account.css'
import UserEditForm from './UserEditForm'

class AccountCont extends Component {
    render() {
        return (
            <div className={`ProjectContainer${this.props.navIsOpen ? '' : ' close'}`}>
                <div className='Sheet transparent'>
                    < UserEditForm />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        navIsOpen: state.navbar.isOpen
    }
}
export default connect(mapStateToProps)(AccountCont)