import React, { Component } from 'react'

class DynamicCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cellDate: this.setCellDate(this.props.cellIndex)
        }
    
    }

    isActive = () => {
        return ( this.state.cellDate >= this.props.startDate && this.state.cellDate <= this.props.endDate ) ?
        true :
        false
    }

    setCellDate = (pos) => {
        const currentDate = new Date("03/25/2020") // update to project start date
        let cellDate = currentDate.setDate(currentDate.getDate()+pos)
        return cellDate
        }

    getFormattedDate = () => {
        return `${new Date(this.state.cellDate).getDate()}/${new Date(this.state.cellDate).getMonth()+1}`
    }

    render() {
        return (
            <div className={`cell `}>
                { this.props.isHeader ? 
                    (this.getFormattedDate()) :
                    <div className={`bar ${this.isActive() ? ' active' : '' }`}></div> }
            </div>
        )
    }
}
export default DynamicCell