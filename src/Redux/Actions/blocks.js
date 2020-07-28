
import { FETCH_DELETE_BLOCK, FETCH_BLOCK, BLOCK_CLEANUP, POST_BLOCK_FORM, BLOCK_FORM_CLEANUP, TOGGLE_NEW_BLOCK, CHANGE_BLOCK_FORM } from './types'

function deleteBlock(filteredArray){
        return {
            type: FETCH_DELETE_BLOCK,
            payload: filteredArray
        }
}

function fetchDeleteBlock(b_id){
    return (dispatch, getState) => {
        fetch(`http://localhost:3001/blocks/${b_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            }
        })
        .then( r =>  r.json() )
        .then( data => {
            let blockArray = getState().projects.currProject.blocks.filter( block => block.block.id !== data.id )
            dispatch(deleteBlock(blockArray))
        })
    }
}

function toggleNewBlock(){
    return {
        type: TOGGLE_NEW_BLOCK
    }
}

function changeBlockForm(e){
    return{
        type: CHANGE_BLOCK_FORM,
        payload: {[e.target.name]: e.target.value}
    }
}

function postBlock(data) {
    return {
        type: POST_BLOCK_FORM,
        payload: data
    }
}

function postBlockForm(e, form, p_id) {
    return (dispatch) => {
        e.preventDefault();
        fetch(`http://localhost:3001/blocks`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({...form, project_id: p_id})
        })
        .then(r => r.json())
        .then(data => { dispatch(postBlock(data))})
    }
}

function blockFormCleanup(){
    return {type: BLOCK_FORM_CLEANUP}
}

function getBlock(data){
    return {
        type: FETCH_BLOCK,
        payload: data
    }
}

function fetchBlock(b_id){
    return (dispatch) => {
        fetch(`http://localhost:3001/blocks/${b_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(getBlock(data))
        })
    }
}

function blockCleanup(){
    return {
        type: BLOCK_CLEANUP
    }
}

export { fetchDeleteBlock, fetchBlock, postBlockForm, blockFormCleanup, blockCleanup, toggleNewBlock, changeBlockForm }