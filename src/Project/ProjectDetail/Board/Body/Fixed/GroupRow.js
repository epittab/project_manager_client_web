import React, { Component } from 'react'

import Block from './Block'

class GroupRow extends Component {
    render() {
        return (
            <Block key = {this.props.block.block.id+50} 
            block = {this.props.block } 
            psd={this.props.psd}
            routeProps={this.props.routeProps}
            duration={this.props.duration}/>
        )
    }
}
export default GroupRow