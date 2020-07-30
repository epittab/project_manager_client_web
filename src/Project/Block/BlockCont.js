import React, { Component } from 'react'
import NewBlock from './NewBlock'
import EditButton from '../../Components/EditButton'
import DeleteButton from '../../Components/DeleteButton'

import {connect} from 'react-redux'
import { fetchProject } from '../../Redux/Actions/projects'
import { toggleNewBlock } from '../../Redux/Actions/blocks'

import {Link} from 'react-router-dom'

import './Block.css'
class BlockCont extends Component {

    componentDidMount() {
        this.props.getProject(this.props.routeProps.match.params.p_id)
    }

    renderBlocks(){
        return(
        <div>
            { (this.props.blocks.length > 0) ?
            this.props.blocks.map(block => 
                <div className='block-wrapper-grid'>
                    <div className='block-wrapper-grid-text'>
                        <p> <strong>Block Name: </strong> {`${block.block.block_name}`}</p>
                        <p className='block-text'> <strong>Block Desc:</strong> {`${block.block.block_description}`}</p>
                    </div>
                    <div className='block-wrapper-grid-buttons'>
                        < Link to={`/projects/${this.props.routeProps.match.params.p_id}/blocks/${block.block.id}`}> < EditButton size={2} /> </Link>
                        < DeleteButton buttonType={'Block'} type_id={block.block.id} size={2}/>
                    </div>
                    
                    
                </div>
            )
            : <p>This project currently does not have any blocks</p>
        }
        </div>)
    }

    render() {
        return (
            <div className='Sheet transparent'>
                <h2>Project</h2>

                < br />
                < br />
                <Link to={`/projects/${this.props.routeProps.match.params.p_id}`} ><div className='back-bubble'></div></Link>
                < br />
                <div>
                    <h3>All Blocks</h3>
                    <div>
                        <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.props.toggleForm}>
                        </div>
                    </div>
                    {this.props.isOpen ? < NewBlock p_id={this.props.routeProps.match.params.p_id} /> : null}
                    {this.props.blocks ? this.renderBlocks() : null}
                </div>



            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: (p_id) => {dispatch(fetchProject(p_id))},
        toggleForm: () => { dispatch(toggleNewBlock())}
    }
}

const mapStateToProps = (state) => {
    return {
        blocks: state.projects.currProject.blocks,
        isOpen: state.blocks.isNewBlockOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockCont)