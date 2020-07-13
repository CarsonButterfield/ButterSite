import React from 'react'
import {useSetRecoilState} from 'recoil'
import ActiveGuild from '../../../Recoil/atoms/ActiveGuild'
const GuildCard = (props) => {
    const setGuildAtom = useSetRecoilState(ActiveGuild)
    const { guild } = props
    const setGuild = () => {
        setGuildAtom(props.idx)
        props.close()
    }
    return(
        <div onClick={setGuild} className="guild-card hover-white">
            <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="guild-icon"/>
            <h3>{guild.name}</h3>
        </div>
    )
}

export default GuildCard