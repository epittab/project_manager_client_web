import {FETCH_ALL_PROJECTS, FETCH_PROJECT, PROJECT_CLEANUP, POST_PROJECT_FORM, PROJECT_FORM_CLEANUP, CHANGE_PROJECT_FORM, TOGGLE_COMPLETED_PROJECTS} from './types'


function toggleCompleteProjects(){
    return {
        type: TOGGLE_COMPLETED_PROJECTS
    }
}


function changeProjectForm(e){
    return {
        type: CHANGE_PROJECT_FORM,
        payload: {[e.target.name]: e.target.value}
    }
}

function postProject(data) {
    return {
        type: POST_PROJECT_FORM,
        payload: data
    }
}

function postProjectForm(e, form) {
    return (dispatch) => {
        e.preventDefault();
        fetch(`http://localhost:3001/projects`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(data => { dispatch(postProject(data))})
    }
}

function projectFormCleanup(){
    return {type: PROJECT_FORM_CLEANUP}
}
 
function getAllProjects(data){
    return {
        type: FETCH_ALL_PROJECTS,
        payload: data
    }
}

function fetchAllProjects(){
    return (dispatch) => {
        fetch(`http://localhost:3001/projects/`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(getAllProjects(data))
        })
        .catch( err => {console.log(err)})
    }
}

function getProject(data){
    return {
        type: FETCH_PROJECT,
        payload: data
    }
}

function fetchProject(p_id){
    return (dispatch) => {
        fetch(`http://localhost:3001/projects/${p_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(getProject(data))
        })
        .catch( err => {console.log(err)})
    }
}

function projectCleanup(){
    return {
        type: PROJECT_CLEANUP
    }
}

export {fetchAllProjects, toggleCompleteProjects, fetchProject, postProjectForm, projectFormCleanup, changeProjectForm, projectCleanup}