import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import BlockCell from './BlockCell'
import Indicator from '../../Header/Indicator'
import AddButton from '../../../../../Components/AddButton'
import EmptySpace from '../../../../../Components/EmptySpace'

class FixedCell extends Component {
   
    render() {
        return (
            <div className={`Project-title-column ${(this.props.handleToggle || this.props.isHeader) ? '' : 'task'}`}  >
                { this.props.isHeader ? 
                (<> < EmptySpace size={'1rem'}/> <Link className='Project-title-column-add' to={`/projects/${this.props.routeProps.match.params.p_id}/blocks`}>< AddButton size={1.2} /> </Link> < Indicator performance={' default-bulb'} /> < EmptySpace size={'4rem'} /></>): 
                <BlockCell 
                    routeProps={this.props.routeProps} 
                    name = {this.props.name}
                    block={this.props.block}  p_id={this.props.block.block.project_id} 
                    b_id={this.props.block.block.id} toggle={this.props.handleToggle}/> }
            </div>
        )
    }
}

export default FixedCell;