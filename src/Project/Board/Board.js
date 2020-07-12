import React, { Component } from 'react'

import ProjectCard from './Cards/ProjectCard'

import './Board.css'

class Board extends Component {
    render() {
        return (
            <div className='Board transparent'>
                < ProjectCard />
            </div>
        )
    }
}
export default Board;