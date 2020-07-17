import React, { Component } from 'react'

class NewBlock extends Component {
    constructor(){
        super()
        this.state ={
            block_name: '',
            block_description: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/')
        .then(r => r.json())
        .then(data => console.log(data))
        this.setState()
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                New Block Form
                <form  className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-text' >
                        Block Name:
                    </label>
                    <input name='block_name' type='text' value={this.state.block_} onChange={this.handleChange}/>
                    <br />
                    <label className='form-text' >
                        Block Description:
                    </label>
                    <textarea name='block_description' type='text' value={this.state.block_} onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default NewBlock