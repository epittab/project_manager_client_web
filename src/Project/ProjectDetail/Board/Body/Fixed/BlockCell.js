import React, { Component } from 'react'

import Expand from '../../../../../Components/Expand'


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
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default BlockCell