import React, { Component } from 'react'

import Info from './Info'
import Widget from './Widget'

class Tray extends Component {
    render() {
        return (
            <div className='Tray transparent'>
                < Info />
                <div className = 'Widget-wrapper'>
                    < Widget />

                </div>
            </div>
        )
    }
}
export default Tray;