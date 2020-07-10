import React from 'react'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
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
            <div className='Register'>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='Reg-first_name'> First Name: 
                        <input id='Reg-first_name' name='first_name' 
                            type='text'
                            value={this.state.first_name} 
                            onChange={this.handleChange}/>
                    </label>
                    <label htmlFor='Reg-last_name'> Last Name: 
                        <input id='Reg-last_name' name='last_name' 
                            type='text'
                            value={this.state.last_name} 
                            onChange={this.handleChange}/>
                    </label>
                    <label htmlFor='Reg-username'> Username: 
                        <input id='Reg-username' name='username' 
                            type='text'
                            value={this.state.username} 
                            onChange={this.handleChange}/>
                    </label>
                    <label htmlFor='Reg-password'> Password: 
                        <input id='Reg-password' name='password' 
                            type='password'
                            value={this.state.password} 
                            onChange={this.handleChange}/>
                    </label>
                    <button type='submit'>Register</button>
                </form>


            </div>
        )
    }
}

export default Register;