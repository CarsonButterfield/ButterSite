import React from 'react'
import { XYPlot, RadialChart } from 'react-vis'
// this chart is meant for displaying percentages  
const SimplePie = (props) => {
    const percentage = ((props.setOne / (props.setOne + props.setTwo)) * 100).toFixed(2)
    const data = [{angle: props.setOne}, {angle: props.setTwo}]

    return(
    <div className="simple-pie">
            <p className="simple-pie-label">{percentage}% <br/> Active Users</p>
            <RadialChart radius={125} innerRadius={100} height={250} width={250} data={data}/>
    </div>
    
    )
}

export default SimplePie 