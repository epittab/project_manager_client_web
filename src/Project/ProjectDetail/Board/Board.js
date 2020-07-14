import React, { Component } from 'react'

import Block from './Body/Fixed/Block'

import './Board.css'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            project: [{b_id: 1, b_name: "Design", tasks: [{t_id: 1, t_name: "test"}, {t_id: 2, t_name: "test"} ]},
                        {b_id: 2, b_name: "Implement", tasks: [{t_id: 1, t_name: "test"}, {t_id: 2, t_name: "test"} ]},
                        {b_id: 3, b_name: "Monitor and Control", tasks: [{t_id: 1, t_name: "test"}, {t_id: 2, t_name: "test"} ]}]
        }
    }
    render() {
        return (
            <div className='Board transparent'>
                Board
                {this.state.project.map((b) => { return < Block key = {b.id} name = {b.b_name } tasks={b.tasks}/> })}
            </div>
        )
    }
}
export default Board;