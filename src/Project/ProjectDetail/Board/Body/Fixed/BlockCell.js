import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Expand from '../../../../../Components/Expand'
import EditButton from '../../../../../Components/EditButton'
import EmptySpace from '../../../../../Components/EmptySpace'


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
                { (this.props.block && this.props.block.tasks.length > 0) ?  
                <Expand isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} toggle={this.props.toggle} /> :
                < EmptySpace size={'0px'} /> }  
                <div className='BlockCell-title-disp-name'>{this.props.name}</div>
                <div style={{height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                { this.props.block ? 
                (<><Link to={`/projects/${this.props.p_id}/blocks/${this.props.b_id}`}>< EditButton size={1.2}/></Link>< EmptySpace size='1.2rem'/> </>) :
                (<><Link to={`/projects/${this.props.p_id}/blocks/${this.props.b_id}/tasks/${this.props.task.t_id}`}>< EditButton size={1.2}/></Link>< EmptySpace size='1.2rem' /> </>)}
                </div>
                
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


export default connect(mapStateToProps, mapDispatchToProps)(BlockCell)