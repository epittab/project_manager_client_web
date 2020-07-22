import React, { Component } from 'react'
import NewBlock from './NewBlock'
import EditButton from '../../Components/EditButton'
import DeleteButton from '../../Components/DeleteButton'

import {Link} from 'react-router-dom'

import './Block.css'
class BlockCont extends Component {

    constructor() {
        super()
        this.state = {
            showingForm: false
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/projects/${this.props.routeProps.match.params.p_id}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({...this.state, project_array: data })
        })
        .catch( err => {console.log(err)})
    }

    toggleForm = () => {
        this.setState({showingForm: !this.state.showingForm})
    }
    
    renderBlocks(){
        return(
        <div>
            { (this.state.project_array.blocks.length > 0) ?
            this.state.project_array.blocks.map(block => 
                <div className='block-wrapper'>
                    <div>
                        <p> <strong>Block Name: </strong> {`${block.block.block_name}`}</p>
                        <p> <strong>Block Desc:</strong> {`${block.block.block_description}`}</p>
                    </div>
                    <div>
                    <Link to={`/projects/${this.props.routeProps.match.params.p_id}/blocks/${block.block.id}`}>< EditButton size='1.2rem' /></Link>
                        < DeleteButton size='1.2rem'/>
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

                

                <div>
                    <h3>All Blocks</h3>
                    <div>
                        <div className='add-icon' style={{height: '1rem', width: '1rem'}} onClick={this.toggleForm}>
                        </div>
                    </div>
                
                
                    {this.state.showingForm ? < NewBlock p_id={this.props.routeProps.match.params.p_id} /> : null}

                    {this.state.project_array ? this.renderBlocks() : null}
                
                </div>



            </div>
        )
    }
}
export default BlockCont