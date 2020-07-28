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
                    < Widget wid_type={'perc_complete'} />
                    < Widget wid_type={'task_dist'}/>
                    < Widget wid_type={'budget'}/>
                    < Widget wid_type={'cost'}/>
                    < Widget wid_type={'duration'}/>
                    < Widget wid_type={'days_left'}/>
                    < Widget wid_type={'team'}/>
                </div>
            </div>
        )
    }
}
export default Tray;