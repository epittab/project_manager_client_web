import React, { Component } from 'react'

import { connect } from 'react-redux'
import { changeBlockForm, postBlockForm, blockFormCleanup } from '../../Redux/Actions/blocks'

class NewBlock extends Component {

    componentWillUnmount = () => {this.props.handleCleanup()}
   
    handleSubmit = (e) => {
        this.props.submitBlockForm(e, this.props.newBlockForm, this.props.p_id)
        this.props.handleCleanup()
    }
    
    render() {
        return (
            <div>
                New Block Form
                <form  className='form-body' onSubmit={this.handleSubmit}>
                    <label className='form-text' >
                        Block Name:
                    </label>
                    <input name='block_name' type='text' value={this.props.newBlockForm.block_name} onChange={this.props.handleChange}/>
                    <br />
                    <label className='form-text' >
                        Block Description:
                    </label>
                    <textarea name='block_description' type='text' value={this.props.newBlockForm.block_description} onChange={this.props.handleChange}/>
                    <br />
                    <button  className='form-button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {dispatch(changeBlockForm(e))},
        submitBlockForm: (e, form, p_id) => {dispatch(postBlockForm(e, form, p_id))},
        handleCleanup: () => {dispatch(blockFormCleanup())}
    }
}

const mapStateToProps = (state) => {
    return {
        // blocks: state.projects.currProject.blocks,
        newBlockForm: state.blocks.newBlockForm
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBlock)