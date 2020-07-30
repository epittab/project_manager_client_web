import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { fetchAllContributors, inviteFormCleanup, changeInviteForm, postInviteForm } from '../Redux/Actions/invite'

import './Invite.css'

 class Invite extends Component {

    componentWillUnmount() { this.props.cleanup() }

    componentDidMount() {
        this.props.getContributors(this.props.routeProps.match.params.p_id)
    }

    renderTeam(){
        return(
        <div>
            <h4> Team Members: </h4>
            {this.props.contributors.map((cont) => {return <div> 
                    <p style={{color: 'darkslategrey'}}><strong>Name:</strong> {cont.first_name} {cont.last_name}</p>
                 </div>})}
        </div>)
    }
   
    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Invite</h2>

                < br />
                <Link to={`/projects/${this.props.routeProps.match.params.p_id}`} ><div className='back-bubble'></div></Link>
                < br />

                <div className='total-Invite-container'>
                    <h4>Total Contributors</h4>
                    <p>{this.props.contributors.length}</p>
                </div>
                <form className='Invite-form' onSubmit={(e) => this.props.handleSubmitInviteForm(e, this.props.form, this.props.routeProps.match.params.p_id)}>
                    <label className='form-text'>Username: </label>
                    <input name='username' value={this.props.username}  onChange={(e) => this.props.handleChangeInviteForm(e)} className='form-option' />
                    <label className='form-text'>Select Role:</label>
                    <select name='role_type' className='form-option' onChange={(e) => this.props.handleChangeInviteForm(e)} 
                    id='invite-form-type' type='text' >
                        <option value='Contributor'>Contributor</option>
                        <option value='Owner'>Owner</option>
                    </select>
                    < br/>
                    <button className='form-button primary' type='submit' >Submit</button>
                </form>
                <div>
                    { this.props.contributors.length > 0 ? this.renderTeam() : null }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContributors: (p_id) => {dispatch(fetchAllContributors(p_id))},
        cleanup: () => {dispatch(inviteFormCleanup())},
        handleChangeInviteForm: (e) => {dispatch(changeInviteForm(e))},
        handleSubmitInviteForm: (e, form, p_id) => {dispatch(postInviteForm(e, form, p_id))}
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.invite.newInviteForm,
        username: state.invite.newInviteForm.username,
        role_type: state.invite.newInviteForm.role_type,
        contributors: state.invite.contributors
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite)