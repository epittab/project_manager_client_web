import React, { Component } from 'react'

import {connect} from 'react-redux'

class NewBlock extends Component {
    constructor(props){
        super(props)
        this.state ={
            block_name: '',
            block_description: '',
            project_id: this.props.p_id
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/blocks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(data => console.log(data))
        this.setState({...this.state, block_name: '',
        block_description: ''})
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
                    <input name='block_name' type='text' value={this.state.block_name} onChange={this.handleChange}/>
                    <br />
                    <label className='form-text' >
                        Block Description:
                    </label>
                    <textarea name='block_description' type='text' value={this.state.block_description} onChange={this.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBlock)