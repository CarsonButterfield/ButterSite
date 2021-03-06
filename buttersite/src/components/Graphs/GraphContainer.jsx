import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import GuildStats from '../Guild/GuildStats'
import MemberStats from '../Guild/MemberStats'
import './Graphs.css'

const GraphContainer = (props) => {
    const {guildData, guild} = useRecoilValue(ActiveGuildData)
    const [channelData, setChannelData] = useState([])
    const [userData, setUserData] = useState([])
    
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
                        x: guild.members[user].displayname,
                        y: mappedUserData[user],
                        
                    })
            }
            setChannelData(formattedChannelData)
            setUserData(formattedUserData)
        })

    }, [guildData, guild])

    return(
        <div id="graph-container">
       
    <Route path="/guild" render={()=> <GuildStats guild={guild} data={channelData}/> }/>
    <Route path="/users" render={()=> <MemberStats guild={guild} data={userData}/> }/> 
        </div>
    )
}

export default GraphContainer