import React, { Component } from 'react'

import Info from './Info'
import Widget from './Widget'
import BudgetCard from './BudgetCard';

class Tray extends Component {
    render() {
        return (
            <div className='Tray transparent'>
                < Info />
                <div className = 'Widget-wrapper'>
                    < BudgetCard routeProps={this.props.routeProps}/>
                    < Widget />

                </div>
            </div>
        )
    }
}
export default Tray;