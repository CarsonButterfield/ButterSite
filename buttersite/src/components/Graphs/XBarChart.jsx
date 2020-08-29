import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, VerticalGridLines} from 'react-vis';
import './Graphs.css'
const XBarChart = ( props ) => {
    const yStyle = {
        text:{fill:"WhiteSmoke"},
        title:{fill:"WhiteSmoke"}
    }
    const xStyle = {
        text:{fill:"WhiteSmoke"},
        title:{fill:"WhiteSmoke"}
    }
    const truncateLables = (label) => {
        return label.slice(0,13)
    }
    
    return (
        <div  class="chart">
        <XYPlot xType="ordinal" width={1200} height={500}>
            <XAxis tickFormat={truncateLables} style={xStyle}/>
            <YAxis title="hours" style={yStyle} tickFormat={x => (x / (1000 * 60 * 60)).toFixed(1)}/>
            <HorizontalGridLines/>
            <VerticalGridLines/>
            <VerticalBarSeries data={props.data}/>
        </XYPlot>
        </div>
    )
}

export default XBarChart