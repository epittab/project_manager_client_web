import React, { Component } from 'react'

import ProjectCard from './Cards/ProjectCard'
import NewCard from './Cards/NewCard'

import './Board.css'

class Board extends Component {
    render() {
        return (
            <div className='Board transparent'>
                < NewCard />
                < ProjectCard />
            </div>
        )
    }
}
export default Board;