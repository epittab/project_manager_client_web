
import {  POST_INVITE, FETCH_ALL_CONTRIBUTORS, INVITE_FORM_CLEANUP, CHANGE_INVITE_FORM } from '../Actions/types'

function postInvite(data){
    return {
        type: POST_INVITE,
        payload: data
    }
}

function postInviteForm(e, form, p_id){
    return (dispatch) => {
        e.preventDefault()
        fetch('http://localhost:3001/contributor', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({...form, project_id: p_id })
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(postInvite(data))
        })
    }
}

function inviteFormCleanup(){
    return {
        type: INVITE_FORM_CLEANUP
    }
}

function changeInviteForm(e){
    return {
        type: CHANGE_INVITE_FORM,
        payload: { [e.target.name]: e.target.value }
    }
}

function getAllContributors(data){
    return {
        type: FETCH_ALL_CONTRIBUTORS,
        payload: data
    }
}

function fetchAllContributors(p_id){
    return (dispatch) => {
        fetch(`http://localhost:3001/invite/`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({project_id: p_id})
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(getAllContributors(data))
        })
        .catch( err => {console.log(err)})
    }
}



export { postInviteForm, inviteFormCleanup, changeInviteForm, fetchAllContributors }