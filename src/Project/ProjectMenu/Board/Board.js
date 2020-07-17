import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import ProjectCard from './Cards/ProjectCard'
import NewCard from './Cards/NewCard'

import './Board.css'

class Board extends Component {
    render() {
        return (
            <div className='Board transparent'>
                < NewCard />
                <Link to='/projects/1'>< ProjectCard /></Link>
            </div>
        )
    }
}
export default Board;