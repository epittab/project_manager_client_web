 import { FETCH_GENERAL_PERF, FETCH_PROJECT_PERF } from './types'


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

 export { fetchGeneralPerf, fetchProjectPerf}