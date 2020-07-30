import {  POST_INVITE, FETCH_ALL_CONTRIBUTORS, INVITE_FORM_CLEANUP, CHANGE_INVITE_FORM } from '../Actions/types'

const initialState = {
    contributors: [],
    newInviteForm: {
        username: '',
        role_type: 'Contributor',
    }
}

const reducer = ( oldState = initialState, action) => {

    switch (action.type) {
        case POST_INVITE:
            return {...oldState, newInviteForm: {...initialState.newInviteForm}, contributors: [...oldState.contributors, action.payload]}
        case FETCH_ALL_CONTRIBUTORS:
            return {...oldState, contributors: [...action.payload]}
        case INVITE_FORM_CLEANUP:
            return {...initialState}
        case CHANGE_INVITE_FORM:
            return {...oldState, newInviteForm: {...oldState.newInviteForm, ...action.payload}}
        default:
            return oldState
    }

}

export default reducer;