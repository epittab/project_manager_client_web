import React, { Component } from 'react'

import Info from './Info'
import Widget from './Widget'
import BudgetCard from './BudgetCard';
import InviteCard from './InviteCard';

class Tray extends Component {
    render() {
        return (
            <div className='Tray transparent'>
                < Info />
                <div className = 'Widget-wrapper'>
                    < BudgetCard routeProps={this.props.routeProps} />
                    < InviteCard routeProps={this.props.routeProps} />
                    < Widget />

                </div>
            </div>
        )
    }
}
export default Tray;