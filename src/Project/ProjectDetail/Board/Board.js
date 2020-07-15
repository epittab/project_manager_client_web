import React, { Component } from 'react'

import './Board.css'
import Header from './Header/Header'
import GroupRow from './Body/Fixed/GroupRow'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            projectDuration: 14,
            project: [{b_id: 1, b_name: "Design", tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/26/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/27/2020")} ]},
                        {b_id: 2, b_name: "Implement", tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/26/2020"), t_e_date: new Date("03/27/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/27/2020"), t_e_date: new Date("03/29/2020")} ]},
                        {b_id: 3, b_name: "Monitor and Control", tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/28/2020"), t_e_date: new Date("03/29/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/30/2020")} ]}]
        }
    }
    render() {
        return (
            <div className='Board transparent'>
                < Header duration={this.state.projectDuration}/>
                {this.state.project.map((b) => < GroupRow key = {b.b_id+100} block = {b} duration={this.state.projectDuration}/> )}
            </div>
        )
    }
}
export default Board;