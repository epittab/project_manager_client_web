import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then( user => {
            this.setState({})
            console.log(user)

        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className='Login'>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='Log-username'> Username: 
                        <input id='Log-username' name='username' 
                            type='text'
                            value={this.state.username} 
                            onChange={this.handleChange}/>
                    </label>
                    <label htmlFor='Log-password'> Password: 
                        <input id='Log-password' name='password' 
                            type='password'
                            value={this.state.password} 
                            onChange={this.handleChange}/>
                    </label>
                    <button type='submit'>Login</button>
                </form>


            </div>
        )
    }
}

export default Login;