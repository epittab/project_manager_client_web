import React, { Component } from 'react'
import DynamicCell from '../Body/Dynamic/DynamicCell'
import FixedCell from '../Body/Fixed/FixedCell'


class Header extends Component {
    render() {
        const days = new Array(this.props.duration).fill("")
        return (
            <div className='GroupRow' style ={{display: 'flex'}}>
                
                <FixedCell isHeader={true}/>
                 
                { days.map( (days, index) =>  <DynamicCell key={index+1} isHeader={true} cellIndex={index}/>)}
                
            </div>
        )
    }
}
export default Header