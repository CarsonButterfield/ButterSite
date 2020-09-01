import React from 'react'
import { XYPlot, RadialChart } from 'react-vis'
// this chart is meant for displaying % and other simple data sets, only accepts two angles 
const SimplePie = (props) => {
    const data = [{angle: props.setOne}, {angle: props.setTwo}]

    return(
    
            <RadialChart height={300} width={300} data={data}/>
    
    )
}

export default SimplePie 