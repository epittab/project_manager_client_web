import {FETCH_ALL_PROJECTS, FETCH_PROJECT, POST_PROJECT_FORM, PROJECT_FORM_CLEANUP, CHANGE_PROJECT_FORM, PROJECT_CLEANUP, POST_BLOCK_FORM} from '../Actions/types'

const initialState = {
    userProjects: [],
    currProject: {},
    newProjectForm: {
        project_name: '',
        project_description: '',
        est_start_date: '',
        est_end_date: ''
    }
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {

        case POST_PROJECT_FORM:
            return {...oldState, newProjectForm: action.payload}
        case CHANGE_PROJECT_FORM:
            return {...oldState, newProjectForm: {...oldState.newProjectForm, ...action.payload}}
        case PROJECT_FORM_CLEANUP:
            return {...oldState, newProjectForm: initialState.newProjectForm}
        case FETCH_ALL_PROJECTS:
            return {...oldState, userProjects: [...action.payload]}
        case FETCH_PROJECT:
            return {...oldState, currProject: action.payload}
        case PROJECT_CLEANUP:
            return {...oldState, currProject: initialState.currProject}
        case POST_BLOCK_FORM:
            return {...oldState, currProject: {...oldState.currProject, blocks: [...oldState.currProject.blocks, action.payload]}}
        default:
            return oldState
    }
    
}

export default reducer;