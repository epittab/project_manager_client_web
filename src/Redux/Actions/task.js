import {FETCH_TASK, DELETE_TASK, TOGGLE_TASK_COSTS, CHANGE_TASK_BUDGET, SUBMIT_TASK_BUDGET} from './types'

function handleDeleteTask(delTask) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TASK,
            payload: delTask
        })
    }
}

function deleteTask(t_id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${t_id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( r => r.json() )
            .then( data => {
                dispatch(handleDeleteTask(data))
            })
    }
}

function handleFetchTask(data){
    return{
        type: FETCH_TASK,
        payload: data
    }
}

function fetchTask(t_id) {
    return (dispatch, getState) => {
        fetch(`http://localhost:3001/tasks/${t_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
           dispatch(handleFetchTask(data))
        })
        
    }
}
function toggleTaskCosts() {
    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_TASK_COSTS
        })
    }
}

function changeTaskBudget(budget) {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_TASK_BUDGET, 
            payload: budget
        })
    }
}

function submitTaskBudget() {
    return (dispatch, getState) => {
        let {budget} = getState().task
        dispatch({
            type: SUBMIT_TASK_BUDGET,
            payload: budget
        })

    }
}

export { deleteTask, fetchTask, toggleTaskCosts, changeTaskBudget, submitTaskBudget }