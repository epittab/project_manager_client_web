import { LOGIN_FORM, LOGIN_FORM_CLEANUP, POST_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, CHANGE_LOGIN_FORM } from './types'

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        payload: 'Invalid username and/or password.'
    }
}
function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

function fetchLogin() {
    return {
        type: POST_LOGIN,
        payload: {loading: true}
    }
}

function changeLoginForm(e) {
    return {
        type: CHANGE_LOGIN_FORM,
        payload: {[e.target.name]: e.target.value}
    }
}

function postLogin(e, form) {
    return (dispatch) => {
        e.preventDefault()
        dispatch(fetchLogin())
            fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: form.username,
                    password: form.password
                })
            })
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw new Error('Invalid username and/or password.' )
                }
            })
            .then( user => {
                if (user.token !== undefined ) {
                    localStorage.setItem('token', user.token)
                    localStorage.setItem('first_name', user.first_name)
                }
                dispatch(loginSuccess(user))
                dispatch(loginFormCleanup())
            })
            .catch( (err) =>  { 
                console.log(err)
                localStorage.removeItem('token');
                dispatch(loginFailure(err))
                dispatch(loginFormCleanup())
            })
        
    }
}
function loginForm() {
    return {
        type: LOGIN_FORM
    }
}

function loginFormCleanup() {
    return {
        type: LOGIN_FORM_CLEANUP 
    }
}

export { postLogin, loginForm, loginFormCleanup, loginFailure, loginSuccess, changeLoginForm }

