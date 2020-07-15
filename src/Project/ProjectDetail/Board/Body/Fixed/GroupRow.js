import React, { Component } from 'react'

import Block from './Block'

class GroupRow extends Component {
    // console.log(new Array(5))
    render() {
        return (
            <Block key = {this.props.block.b_id+50} block = {this.props.block } duration={this.props.duration}/>
        )
    }
}
export default GroupRow