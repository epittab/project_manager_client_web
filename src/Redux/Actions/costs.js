
import { COST_FORM_CLEANUP, CHANGE_COST_FORM, POST_LABOR_COST, POST_SM_COST } from './types'

function postLaborCost(data){
    return {
        type: POST_LABOR_COST,
        payload: data
    }
}

function postSmCost(data){
    return {
        type: POST_SM_COST,
        payload: data
    }
}

function postCostForm(e, form, t_id){
    return (dispatch) => {
        e.preventDefault()
        fetch('http://localhost:3001/costs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({...form, t_id: t_id})
        })
        .then( r => r.json() )
        .then( data => {
            data.hasOwnProperty("isService") ? 
            dispatch(postSmCost(data)) :
            dispatch(postLaborCost(data))
        })
    }
}

function costFormCleanup(){
    return {
        type: COST_FORM_CLEANUP
    }
}

function changeCostForm(e){
    return {
        type: CHANGE_COST_FORM,
        payload: { [e.target.name]: e.target.value }
    }
}




export { postCostForm, costFormCleanup, changeCostForm,  }