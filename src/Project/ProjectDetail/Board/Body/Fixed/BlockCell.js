import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Expand from '../../../../../Components/Expand'
import EditButton from '../../../../../Components/EditButton'


class BlockCell extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: true
        }
    }

    toggleOpen = () => {
   
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        console.log( this.props.block)
        return (
            <div className='BlockCell' >
                { this.props.block ?  <Expand isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} toggle={this.props.toggle} /> : null }  
                <div className='BlockCell-title-disp-name'>{this.props.name}</div>
                { this.props.block ? 
                <Link to={`/projects/1/blocks/${this.props.block.b_id}`}>< EditButton size='1.2rem'/></Link> :
                <Link to={`/projects/1/blocks/${this.props.b_id}/tasks/${this.props.task.t_id}`}>< EditButton size='1.2rem'/></Link> }
                
                
                
            </div>
        )
    }
}

export default BlockCell