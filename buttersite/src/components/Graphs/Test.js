import React, {useState, useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import { VictoryPie, VictoryLabel } from 'victory'
import './Graphs.css'
const Test = ( props ) => {
    const convertToHours = (miliseconds) => {
       return (miliseconds / (1000 * 60 * 60)).toFixed(1)
    }
    const {guildData, guild} = useRecoilValue(ActiveGuildData)
    let [parsedData, setParsedData] = useState([])
    useEffect(()=>{
        guildData && guildData.then(res => {
            const mappedData = {}
            const formattedData = []
            console.log(res)
            res.data.guild.voiceLogs.forEach(log => {
                if (mappedData[log.voiceChannel]){
                    mappedData[log.voiceChannel] += log.timeLeft - log.timeJoined
                }
                else{
                    mappedData[log.voiceChannel] = log.timeLeft - log.timeJoined
                }
            })
            console.log('beep')
            for(let channel in mappedData){
                if(channel !== "null")
                formattedData.push({
                    x:guild.channels[channel].name,
                    y:mappedData[channel]
                })
            }
            console.log({formattedData})
            setParsedData(formattedData)
        })

    },[guildData, guild])
    return (
        <div id="piegraph">
        {parsedData.length > 0 && 
            <VictoryPie 
                data={parsedData} 
                colorScale="qualitative" 
                labelRadius = {70}
                
                style={{ labels: { fill: "white", fontSize:"18px" } }} 
                labels={({ datum }) => `${datum.x} \b ${convertToHours(datum.y)} Hours`} 
                labelComponent={<VictoryLabel/>} 
            />
        }
        </div>
    )
}

export default Test