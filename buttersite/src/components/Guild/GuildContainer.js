import React from 'react'
import { useRecoilValue } from 'recoil'
import ActiveGuild from '../../Recoil/selectors/ActiveGuildData'
const GuildContainer = () => {
    const { guild , guildData } = useRecoilValue(ActiveGuild)
    const data = guildData.read()
    const logData = () => {
        console.log(data)
    }
    return (
        <>
        <h1>{guild ? guild.name : "Select a Guild"}</h1>
            <button onClick={logData}>Test</button>
                {data.data.data.map( i => <p>{i}</p>)}
        </>
 )
}

export default GuildContainer