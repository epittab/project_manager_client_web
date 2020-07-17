import React, { Component } from 'react'

 class Budget extends Component {
    render() {
        return (
            <div className='Board transparent'>
                <h2>Budget</h2>
                <div className='total-budget-container'>
                    <h4>Total Budget</h4>
                </div>
                <div className='total-budget-detail-container'>
                    <h4>Labor</h4>
                    <div>L costs</div>
                    <h4>Materials</h4>
                    <div>M costs</div>
                    <h4>Services</h4>
                    <div>S costs</div>
                </div>
            </div>
        )
    }
}
export default Budget