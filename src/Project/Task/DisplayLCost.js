import React from 'react'

const DisplayLCost = ({cost}) => {
    return (
        <div className='line-item-wrapper'>
            <div className='col'>
                <h3><span className='line-item'>Cost Name:</span> {cost.labor_name}</h3>
                <p><span className='line-item'>Cost Description:</span> {cost.labor_description}</p>

            </div>
            <div className='col'>
                <p><span className='line-item'>Cost:</span>{cost.labor_cost}</p>

            </div>
        </div>
    )
}
export default DisplayLCost;