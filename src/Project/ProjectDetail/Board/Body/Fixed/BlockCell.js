import React, { Component } from 'react'

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
        return (
            <div className='BlockCell' >
                <Expand isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} toggle={this.props.toggle} />
                <div className='BlockCell-title-disp-name'>{this.props.name}</div>
                < EditButton size='1.2rem'/>
                
            </div>
        )
    }
}

export default BlockCell