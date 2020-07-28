import React, { Component } from 'react'

import './Loading.css'

class Loading extends Component {
    render() {
        return (
            <div className='Loading-container '>
                <div className='Loading-wrapper'>
                    <div className='Loading-bubbles' id='lb1'>
                    </div>
                    <div className='Loading-bubbles' id='lb2'>
                    </div>
                    <div className='Loading-bubbles' id='lb3'>
                    </div>
                    <div className='Loading-bubbles' id='lb4'>
                    </div>
                </div>
            </div>
        )
    }
}
export default Loading;