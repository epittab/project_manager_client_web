import React, { Component } from 'react'

class DynamicCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDate: new Date(),
            cellDate: this.setCellDate(this.props.cellIndex)
        }
    
    }

    isActive = () => {
        console.log()
        let adjustedStartDate = new Date(this.props.startDate)
        adjustedStartDate.setTime(adjustedStartDate.getTime() + 4*60*60*1000)
        let adjustedEndDate = new Date(this.props.endDate)
        adjustedEndDate.setTime(adjustedEndDate.getTime() + 4*60*60*1000)

        return ( this.state.cellDate >= adjustedStartDate && this.state.cellDate <= adjustedEndDate ) ?
        true :
        false
    }

    setCellDate = (pos) => {
        const projectEstStartDate = new Date(this.props.psd) // update to project start date
        projectEstStartDate.setTime(projectEstStartDate.getTime() + 4*60*60*1000)
        let cellDate = projectEstStartDate.setDate(projectEstStartDate.getDate()+pos)
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