import React, { Component } from 'react'

class DynamicCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cellDate: this.setCellDate(this.props.cellDateOffset)
        }
    
    }

    setCellDate = (pos) => {
        const currentDate = new Date() // update to project start date
        let cellDate = currentDate.setDate(currentDate.getDate()+pos)
        return cellDate
        }

    getFormattedDate = () => {
        return `${new Date(this.state.cellDate).getDate()}/${new Date(this.state.cellDate).getMonth()+1}`
    }

    render() {
        return (
            <div className='cell'>
                { this.props.isHeader ? (this.getFormattedDate()) : null }
            </div>
        )
    }
}
export default DynamicCell