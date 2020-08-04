import React, {useState, useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import Test from './Test'
import './Graphs.css'

const GraphContainer = (props) => {
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
            for(let channel in mappedData){
                if(channel !== "null")
                formattedData.push({
                    x:guild.channels[channel].name,
                    y:mappedData[channel]
                })
            }
            setParsedData(formattedData)
        })

    },[guildData, guild])

    return(
        <>
    {parsedData.length && <Test data={parsedData}/> }
        </>
    )
}

export default GraphContainer