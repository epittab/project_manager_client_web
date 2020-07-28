import { LOGOUT } from "./types"
import { loginSuccess, loginFailure } from "./login"

function logout(){
    localStorage.clear()
    return {
        type: LOGOUT
    }
}

function checkAuthTime(){
    return (dispatch) => {
        setTimeout( () =>{
            dispatch(logout())
        }, 1000*60*60*2)
    }
}

function checkAuthorization(){
    return (dispatch) => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            fetch('http://localhost:3001/islogged', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw new Error('401: Unauthorized' )
                }
            })
            .then( user => {
                if (user.token !== undefined ) {
                    localStorage.setItem('token', user.token)
                    localStorage.setItem('first_name', user.first_name)
                }
                dispatch(loginSuccess(user))
                dispatch(checkAuthTime())
            })
            .catch( (err) =>  { 
                console.log(err)
                localStorage.removeItem('token');
                dispatch(loginFailure(err))
            })
        }


    }
}

export { logout, checkAuthTime, checkAuthorization }