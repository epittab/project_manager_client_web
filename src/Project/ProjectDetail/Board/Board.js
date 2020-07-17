import React, { Component } from 'react'

import './Board.css'
import Header from './Header/Header'
import GroupRow from './Body/Fixed/GroupRow'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            projectDuration: 21,
            project: [{b_id: 1, b_name: "Design", b_s_date: new Date("03/25/2020"), b_e_date: new Date("03/27/2020"), tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/26/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/27/2020")} ]},
                        {b_id: 2, b_name: "Implement", b_s_date: new Date("03/26/2020"), b_e_date: new Date("03/29/2020"), tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/26/2020"), t_e_date: new Date("03/27/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/27/2020"), t_e_date: new Date("03/29/2020")} ]},
                        {b_id: 3, b_name: "Monitor and Control", b_s_date: new Date("03/25/2020"), b_e_date: new Date("03/30/2020"), tasks: [{t_id: 1, t_name: "test", t_s_date: new Date("03/28/2020"), t_e_date: new Date("03/29/2020")}, {t_id: 2, t_name: "test", t_s_date: new Date("03/25/2020"), t_e_date: new Date("03/30/2020")} ]}]
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className='Board transparent'>
                <div className='board-data'>
                    < Header routeProps={this.props.routeProps} duration={this.state.projectDuration}/>
                    {this.state.project.map((b) => 
                        < GroupRow key = {b.b_id+100} block = {b}
                        routeProps={this.props.routeProps} 
                        duration={this.state.projectDuration}/> )}
                </div>
            </div>
        )
    }
}
export default Board;