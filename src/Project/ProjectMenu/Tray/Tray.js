import React, { Component } from 'react'

import Widget from './Widget'

import './Tray.css'

 class Tray extends Component {
    render() {
        return (
            <div className='Tray transparent'>
                <div className = 'Widget-wrapper'>
                    < Widget />
                    < Widget />
                    < Widget />
                    < Widget />
                 
                </div>
                   
                    
            </div>
        )
    }
}

export default Tray;