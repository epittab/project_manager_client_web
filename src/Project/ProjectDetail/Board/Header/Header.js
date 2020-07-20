import React, { Component } from 'react'
import DynamicCell from '../Body/Dynamic/DynamicCell'
import FixedCell from '../Body/Fixed/FixedCell'


class Header extends Component {
    render() {
        const days = new Array(this.props.duration).fill("")
        console.log(this.props.routeProps)
        return (
            <div className='GroupRow' style ={{display: 'flex'}}>
                
                <FixedCell routeProps={this.props.routeProps} isHeader={true}/>
                 
                { days.map( (days, index) =>  <DynamicCell key={index+1} isHeader={true} psd={this.props.psd} cellIndex={index}/>)}
                
            </div>
        )
    }
}
export default Header