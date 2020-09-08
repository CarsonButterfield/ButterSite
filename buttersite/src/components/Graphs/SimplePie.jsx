import React from 'react'
import { RadialChart } from 'react-vis'
// this chart is meant for displaying percentages  
const SimplePie = (props) => {
    const percentage = ((props.setOne / (props.setOne + props.setTwo)) * 100).toFixed(2)
    const data = [{angle: props.setTwo ? props.setOne : 1}, {angle: props.setTwo}]
    const label = isNaN(percentage) ? '0' : `${percentage}` 

    return(
    <div className="simple-pie">
            <p className="simple-pie-percentage">{label}%</p>
            <p className="simple-pie-label">Active Users</p>
            <RadialChart colorRange={['#242c4f', '#2250e4']} checkIfEmpty={true} radius={125} innerRadius={100} height={250} width={250} data={data}/>
    </div>
    
    )
}

export default SimplePie 