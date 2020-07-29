import {  PATCH_USER_FORM, SUBMIT_USER, PATCH_USER_COST_FORM, TOGGLE_USER, TOGGLE_USER_COST, CHANGE_USER, CHANGE_USER_COST, FETCH_USER_DETAILS, CLEANUP_USER, CLEANUP_USER_COST, USER_COST_SUCCESS } from './types'

function userCostSuccess(data){
    return {
        type: PATCH_USER_COST_FORM,
        payload: data
    }
}

function patchUserCostForm(e, cost){
    return (dispatch) => {
        e.preventDefault()
        fetch(`http://localhost:3001/account/cost`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify({user_cost: cost})
        })
        .then( r => {
            if (r.ok) {
               return r.json()
            } else {
               throw new Error('Error patching User Cost')
            }
        })
        .then( data => {
            dispatch(userCostSuccess(data.user_cost))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

function cleanupUser(){
    return {
        type: CLEANUP_USER
    }
}



function cleanupUserCost(){
    return {
        type: CLEANUP_USER_COST
    }
}

function changeUser(e){
    return {
        type: CHANGE_USER,
        payload: {[e.target.name]: e.target.value}
    }
}

function changeUserCost(e){
    return {
        type: CHANGE_USER_COST,
        payload: {[e.target.name]: e.target.value}
    }
}

function toggleUser(){
    return {
        type: TOGGLE_USER
    }
}

function toggleUserCost(){
    return {
        type: TOGGLE_USER_COST
    }
}

function getUserDetails(userDetails){
    return{
        type: FETCH_USER_DETAILS,
        payload: userDetails
    }
}

function fetchUserDetails(){
    return (dispatch) => {
        fetch('http://localhost:3001/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then( r => {
            if (r.ok) {
               return r.json()
            } else {
               throw new Error('Error fetching account details')
            }
        })
        .then( data => {
           dispatch(getUserDetails(data))
        })
        .catch((err) => {
           console.log(err)
        })
    }
}

export {patchUserCostForm, fetchUserDetails, toggleUser, toggleUserCost, changeUser, changeUserCost, cleanupUser, cleanupUserCost}