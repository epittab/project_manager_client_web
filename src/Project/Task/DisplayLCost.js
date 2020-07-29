import React from 'react'

const DisplayLCost = ({cost}) => {
    
    return (
        <div className='line-item-wrapper'>
            <div className='col'>
                <h3><span className='line-item'>Cost Name:</span> {cost.time_task_name}</h3>
                <p><span className='line-item'>Cost Description:</span> {cost.time_task_description}</p>

            </div>
            <div className='col'>
                <p><span className='line-item'>Cost:</span>{cost.user_hours}</p>

            </div>
        </div>
    )
}
export default DisplayLCost;