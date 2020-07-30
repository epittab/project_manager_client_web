import React, { Component } from 'react'

// import { connect } from 'react-redux'
import { PieChart, Pie, Tooltip, Cell} from 'recharts';

import './Widget.css'

class Widget extends Component {


    cleanTaskDist(obj){
        let array = Object.entries(obj)
        let arrayOfOjects = array.map( (el) => {
            return {name: el[0], value: el[1]}
        })
        return arrayOfOjects
    }

    renderTaskDist(){
        let data = this.cleanTaskDist(this.props.task_dist)
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

        return ( <div className='Widget'>
            <PieChart width={105} height={105} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={48}
                    cy={80}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
                </Pie>
                <Tooltip />
            </PieChart>
            <p className='widget-text'>Task Statuses</p>
        </div>)
    }

    renderPercComplete(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.pc*100).toFixed(1)}%</p>
            <p className='widget-text'>Completion</p>
        </div>)
    }
    renderDuration(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.duration)}</p>
            <p className='widget-text'>Total Days</p>
        </div>)
    }
    renderDaysLeft(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.days_left)}</p>
            <p className='widget-text'>Days Remaining</p>
        </div>)
    }
    renderTeam(){

        return ( <div>
            <p className='widget-score-text'>{(this.props.team)}</p>
            <p className='widget-text'>Team Member{ this.props.team > 1 ? 's' : ''}</p>
        </div>)
    }
    cleanCostDist(obj){
        let newObj = {}
        for (let key in obj) {
            if (key === 'total_cost') {
                continue;
            }
            let words = key.split('_').map( (word) => word.charAt(0).toUpperCase() + word.slice(1))
          
            let newKey = words.join(' ')
            newObj[newKey] = obj[key]
        }

        let array = Object.entries(newObj).map( (el) => {return {name: el[0], value: el[1]} })
        return array
    
    }
    renderCost(){
        let data = this.cleanCostDist(this.props.total_cost)
        
        return ( <div>
            <PieChart width={105} height={105}>
                <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={48} cy={80} outerRadius={50} fill="#F44336"  />
                <Tooltip />
            </PieChart>
           
            <p className='widget-text'>Costs{ this.props.team > 1 ? 's' : ''}</p>
            </div>)
    }
    renderBudget(){
        
        return ( <div >
            { this.props.overBudget[0] ? 
            (<>
                <p className='widget-score-text bad'>${(this.props.overBudget[1].info.amount).toFixed(0)}</p>
                <p className='widget-text'>Over Budget</p> 
                </>)
            :
            
           (<> 
            <p className='widget-score-text'>${(this.props.overBudget[1].info.amount).toFixed(0)}</p>
            <p className='widget-text'>Budget Left</p> 
            </>)}
        </div>)
    }

    render() {
       
        return (
            <div className='Widget'>
                { (this.props.wid_type === 'task_dist' && this.props.task_dist) ? this.renderTaskDist() : null }
                { (this.props.wid_type === 'perc_complete' && this.props.pc) ? this.renderPercComplete() : null }
                { (this.props.wid_type === 'duration' && this.props.duration) ? this.renderDuration() : null }
                { (this.props.wid_type === 'days_left' && this.props.days_left) ? this.renderDaysLeft() : null }
                { (this.props.wid_type === 'cost' && this.props.total_cost) ? this.renderCost() : null }
                { (this.props.wid_type === 'budget' && this.props.overBudget) ? this.renderBudget() : null }
                { (this.props.wid_type === 'team' && this.props.team) ? this.renderTeam() : null }
            </div>
        )
    }
}

export default Widget;