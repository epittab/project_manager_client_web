import { FETCH_BUDGET } from './types';


const getBudget = (budget) => {
    return {
        type: FETCH_BUDGET,
        payload: budget
    }
}

function fetchBudget(p_id){
    return (dispatch, getState) => {

        fetch(`http://localhost:3001/projects/${p_id}/budget`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then( r => r.json() )
        .then(
            data => dispatch(getBudget(data))
        )
    }
}

export {fetchBudget}