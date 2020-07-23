import React, { Component } from 'react'

import './Board.css'
import Header from './Header/Header'
import GroupRow from './Body/Fixed/GroupRow'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_id: this.props.routeProps.match.params.p_id
        }
    }
    componentDidMount(){
        this.getBoard()
    }   

    deriveProjectLength() {
        if (this.state.project_array) {
            // let {est_end_date, est_start_date} = this.state.project_array.project
            // let timeDelta = new Date(est_end_date).getTime() - new Date(est_start_date).getTime()
            // return timeDelta / (1000 * 3600 * 24)
            return this.state.project_array.days + 1
        } else 
        { return 0}
    }

    getBoard(){
        fetch(`http://localhost:3001/projects/${this.state.p_id}`,{
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

    renderBoard(){ 
        
        return (this.state.project_array.blocks.map((b) => 
            < GroupRow key = {b.b_id+100} block = {b} 
            psd={this.state.project_array.display_start}
            routeProps={this.props.routeProps} 
            duration={this.deriveProjectLength()}/> ))
    }

    renderHeader() {
        
        return  < Header routeProps={this.props.routeProps} 
            psd={this.state.project_array.display_start}
            duration={this.deriveProjectLength()}/>
    }

    render() {
       
        return (
            <div className='Board transparent'>
                <div className='board-data'>
                   
                    { this.state.project_array ? this.renderHeader() : null }
                    { this.state.project_array ? this.renderBoard() : null }
                </div>
            </div>
        )
    }
}
export default Board;