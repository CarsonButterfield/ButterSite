import React from 'react'


import { VictoryPie, VictoryLabel } from 'victory'
import './Graphs.css'
const Test = ( props ) => {
    const convertToHours = (miliseconds) => {
        return (miliseconds / (1000 * 60 * 60)).toFixed(1)
     }
     console.log(props.data)
    return (
        <div id="piegraph">
          

            <VictoryPie 
                data={props.data} 
                colorScale="qualitative" 
                innerRadius={80}
                labelRadius={100}
                style={{ labels: { fill: "white", fontSize:"13px" } }} 
                labels={({ datum }) => `${datum.x} \n ${convertToHours(datum.y)} Hours`} 
                labelComponent={<VictoryLabel/>} 
                />
          
        </div>
    )
}

export default Test