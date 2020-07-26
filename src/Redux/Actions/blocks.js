
import { FETCH_BLOCK, BLOCK_CLEANUP, POST_BLOCK_FORM, BLOCK_FORM_CLEANUP, TOGGLE_NEW_BLOCK } from './types'

function toggleNewBlock(){
    return {
        type: TOGGLE_NEW_BLOCK
    }
}

function postBlock(data) {
    return {
        type: POST_BLOCK_FORM,
        payload: data
    }
}

function postBlockForm(e, form) {
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
        .catch( err => {console.log(err)})
    }
}

function blockCleanup(){
    return {
        type: BLOCK_CLEANUP
    }
}

export { fetchBlock, postBlockForm, blockFormCleanup, blockCleanup, toggleNewBlock }