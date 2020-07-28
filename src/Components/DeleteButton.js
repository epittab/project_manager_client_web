import React, { Component } from 'react'

import { connect } from 'react-redux';
import { deleteTask } from '../Redux/Actions/tasks'
import { fetchDeleteBlock } from '../Redux/Actions/blocks'



import './DeleteButton.css'

class DeleteButton extends Component {

    handleDelete = ( e) => {
        e.preventDefault()

        this.props.buttonType === 'task' ?
        this.props.fetchDelete(this.props.type_id) :
        this.props.deleteBlock(this.props.type_id)
        
    }
    render() {
        return (
            <div className='DeleteButton' onClick={ (e) => this.handleDelete(e) } style={{height: `${this.props.size}rem`, width: `${this.props.size}rem`}}>
            <div className='delete-image' style={{height: `${this.props.size*.6}rem`, width: `${this.props.size*.6}rem`}}></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDelete: (t_id) => dispatch(deleteTask(t_id)),
        deleteBlock: (b_id) => {dispatch(fetchDeleteBlock(b_id))},
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton);