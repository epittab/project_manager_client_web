import { POST_TASK_FORM, CHANGE_TASK_FORM, TASK_FORM_CLEANUP, TOGGLE_TASK_FORM, FETCH_TASK, DELETE_TASK, FETCH_START_TASK, FETCH_COMPLETE_TASK, TOGGLE_TASK_COSTS, CHANGE_TASK_BUDGET, SUBMIT_TASK_BUDGET } from './types'

// Patch Task

function startTask(data) {
    return {
        type: FETCH_START_TASK,
        payload: data
    }
}

function fetchStartTask(t_id){
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${t_id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                field: 'status_id',
                payload: 3
            })
        })
        .then(r => r.json() )
        .then(data => {
            let {status} = data
            dispatch(startTask(status.status_name))
        })
    }
}

function completeTask(data) {
    return {
        type: FETCH_COMPLETE_TASK,
        payload: data
    }
}

function fetchCompleteTask(t_id){
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${t_id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                field: 'status_id',
                payload: 5
            })
        })
        .then(r => r.json() )
        .then(data => {
            let {status} = data
            dispatch(completeTask(status.status_name))
        })
    }
}

// Post Task

function postTask(data){
    return {
        type: POST_TASK_FORM,
        payload: data
    }
}

function postTaskForm(e, form, b_id){
    return (dispatch) => {
        e.preventDefault();
        fetch( `http://localhost:3001/tasks`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')},
            body: JSON.stringify({b_id: b_id, ...form})}
        )
        .then( r => r.json() )
        .then( data => dispatch(postTask(data)))
    }
}

function changeTaskForm(e){
    return{
        type: CHANGE_TASK_FORM,
        payload: {[e.target.name]: e.target.value}
    }
}


function taskFormCleanup(){
    return {
        type: TASK_FORM_CLEANUP
    }
}

function toggleTaskForm(){
    return {
        type: TOGGLE_TASK_FORM
    }
}

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

//Costs

function toggleTaskCosts() {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TASK_COSTS
        })
    }
}

// Budget

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

export { fetchStartTask, fetchCompleteTask, postTaskForm, changeTaskForm, toggleTaskForm, taskFormCleanup, deleteTask, fetchTask, toggleTaskCosts, changeTaskBudget, submitTaskBudget }