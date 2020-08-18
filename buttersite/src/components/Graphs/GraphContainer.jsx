import React, {useState, useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import Piechart from './Piechart'
import './Graphs.css'

const GraphContainer = (props) => {
    const {guildData, guild} = useRecoilValue(ActiveGuildData)
  
    let [channelData, setChannelData] = useState([])
    let [userData, setUserData] = useState([])
    useEffect(() => {
        (guildData && guild) && guildData.then(res => {
            const mappedChannelData = {}
            const mappedUserData = {}
            const formattedUserData = []
            const formattedChannelData = []
           
            res.data.guild.voiceLogs.forEach(log => {
                if (mappedChannelData[log.voiceChannel]) {
                    mappedChannelData[log.voiceChannel] += log.timeLeft - log.timeJoined
                } else {
                    mappedChannelData[log.voiceChannel] = log.timeLeft - log.timeJoined
                }
                if (mappedUserData[log.id]) {
                    mappedUserData[log.id] += log.timeLeft - log.timeJoined
                } else {
                    mappedUserData[log.id] = log.timeLeft - log.timeJoined
                }
            })
            for (let channel in mappedChannelData) {
                if (channel !== "null")
                    formattedChannelData.push({
                        x: guild.channels[channel].name,
                        y: mappedChannelData[channel]
                    })
            }
        
            for (let user in mappedUserData) {
                    if(guild.members[user])
                    formattedUserData.push({
                        x: guild.members[user],
                        y: mappedUserData[user],
                        label:guild.members[user].displayname
                        
                    })
            }
            setChannelData(formattedChannelData)
            setUserData(formattedUserData)
        })

    }, [guildData, guild])

    return(
        <>
    {channelData.length && <Piechart data={channelData}/> }
    {userData.length && <Piechart data={userData}/> }
        </>
    )
}

export default GraphContainer