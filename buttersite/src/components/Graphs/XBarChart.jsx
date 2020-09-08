import React, {useState, useEffect} from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, VerticalGridLines} from 'react-vis';
import './Graphs.css'
const XBarChart = ( props ) => {
    const [data, setData] = useState(props.data.map((datum, i) => {return{...datum,color:i % 2}}))
    const [hoveredBar, setHoveredBar] = useState(null)
    const [label, setLabel] = useState(null)
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
    const onHover = (value, {event, innerX, index}) => {
        if(event.explicitOriginalTarget.attributes){
            const  height  = event.explicitOriginalTarget.getAttribute('height')
            if(height === '500') return
            setLabel(() => <div style={{left:innerX, bottom:parseFloat(height) + 80}} className="graph-hover-label"> {(value.y / (1000 * 60 * 60)).toFixed(2)}</div>)
        }
        
         
    }
    return (
        <div  class="chart">
        <XYPlot colorRange={['#242c4f', '#2250e4']} xType="ordinal"  width={1200} height={500}>
            <XAxis tickFormat={truncateLables} style={xStyle}/>
            <YAxis title="hours" style={yStyle} tickFormat={x => (x / (1000 * 60 * 60)).toFixed(1)}/>
            <HorizontalGridLines/>
            <VerticalGridLines/>
            <VerticalBarSeries onNearestX={onHover} data={data}/>

        {label}
        </XYPlot>
        </div>
    )
}

export default XBarChart