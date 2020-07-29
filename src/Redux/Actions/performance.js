 import { FETCH_GENERAL_PERF, FETCH_PROJECT_PERF, FETCH_ALL_PROJECT_INDICATORS, GET_INDICATORS } from './types'


 function fetchGeneralPerf() {
     return (dispatch) => {
         fetch()
         .then()
         .then()
     }
 }

function projectPerfSuccess(data){
    return {
        type: FETCH_PROJECT_PERF,
        payload: data
    }
}

function fetchProjectPerf(p_id) {
     return (dispatch) => {
         fetch(`http://localhost:3001/projects/${p_id}/performance`, {
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
                throw new Error('Error fetching performance')
             }
         })
         .then( data => {
            dispatch(projectPerfSuccess(data))
         })
         .catch((err) => {
            console.log(err)
         })
     }
 }

 function getAllProjectIndicators(data){
    return {
        type: FETCH_ALL_PROJECT_INDICATORS,
        payload: data
    }
}

function fetchIndicators() {
    return {
        type: GET_INDICATORS,
        payload: {loading: true}
    }
}

function fetchAllProjectIndicators(){
    return (dispatch) => {
        dispatch(fetchIndicators())
        fetch(`http://localhost:3001/projects/performance`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            dispatch(getAllProjectIndicators(data))
        })
        .catch( err => {console.log(err)})
    }
}


 export { fetchGeneralPerf, fetchProjectPerf, fetchAllProjectIndicators}