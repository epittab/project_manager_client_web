import React, { Component } from 'react'

import { connect } from 'react-redux'

class DynamicCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDate: new Date().toDateString(),
            cellDate: this.setCellDate(this.props.cellIndex)
        }
    }

    isCurrent = () => {
        return (this.state.currentDate === new Date(this.state.cellDate).toDateString())
    }

    isActive = () => {
        let adjustedStartDate = new Date(this.props.startDate)
        adjustedStartDate.setTime(adjustedStartDate.getTime() + 4*60*60*1000)
        let adjustedEndDate = new Date(this.props.endDate)
        adjustedEndDate.setTime(adjustedEndDate.getTime() + 4*60*60*1000)

        return ( this.state.cellDate >= adjustedStartDate && this.state.cellDate <= adjustedEndDate ) 
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
            <div className={`cell ${this.isCurrent() ? ' current' : ''}`}>
                { this.props.isHeader ? 
                    (this.getFormattedDate()) :
                    <div className={`bar ${this.isActive() ? ' active' : '' }`}></div> }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(DynamicCell)