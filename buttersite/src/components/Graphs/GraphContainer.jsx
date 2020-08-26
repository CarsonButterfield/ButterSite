import React, {useState, useEffect} from 'react'
import {Link, Route} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ActiveGuildData from '../../Recoil/selectors/ActiveGuildData'
import XBarChart from './XBarChart'
import './Graphs.css'

const GraphContainer = (props) => {
    const {guildData, guild} = useRecoilValue(ActiveGuildData)
    console.log({guildData})
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
        <>
        <li>
        <ul><Link to='/guild'>Guild</Link></ul>
        <ul><Link to='/users'>Users</Link> </ul>
        </li>

    {channelData.length && <Route path="/guild" render={()=> <XBarChart data={channelData}/> }/>}
    {userData.length && <Route path="/users" render={()=> <XBarChart data={userData}/> }/> }
        </>
    )
}

export default GraphContainer