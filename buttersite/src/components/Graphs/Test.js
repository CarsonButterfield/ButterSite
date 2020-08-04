import React, {useState, useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import { VictoryPie, VictoryLabel } from 'victory'
import './Graphs.css'
const Test = ( props ) => {
    const convertToHours = (miliseconds) => {
        return (miliseconds / (1000 * 60 * 60)).toFixed(1)
     }
    return (
        <div id="piegraph">
            <VictoryPie 
                data={props.data} 
                colorScale="qualitative" 
                labelRadius = {70}
                
                style={{ labels: { fill: "white", fontSize:"18px" } }} 
                labels={({ datum }) => `${datum.x} \b ${convertToHours(datum.y)} Hours`} 
                labelComponent={<VictoryLabel/>} 
            />
        </div>
    )
}

export default Test