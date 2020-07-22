import React from 'react'

const DisplayCost = ({cost}) => {
    return (
        <div className='line-item-wrapper'>
            <div className='col'>
                <p><span className='line-item'>Cost Name:</span> {cost.serv_mat_name}</p>
                <p><span className='line-item'>Cost Description:</span> {cost.serv_mat_description}</p>
            </div>
            <div className='col'>
                <p><span className='line-item'>Cost:</span> {cost.serv_mat_cost}</p>
            </div>
        </div>
    )
}
export default DisplayCost;