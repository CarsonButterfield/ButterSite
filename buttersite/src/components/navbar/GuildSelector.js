
import React, { useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import atoms from '../../Recoil/atoms'

const { UserGuildData , ActiveGuild } = atoms

const GuildSelector = () => {
    const guilds  = useRecoilValue(UserGuildData)
    const [isOpen, setOpen ] = useState(false)
    const [ guild , setActiveGuild ] = useRecoilState(ActiveGuild)
    const toggleOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <form id="guild-select-form">
        <h2 onClick={toggleOpen}> {guild != null ? guilds[guild].name : "Choose a Guild"} </h2>
        <ul id="guild-drop-down" style={{display:[isOpen ? "block" : "none"]}}>
        {guilds.map((guild, i )=>{
            return <li key={guild.id} onClick = {e => setActiveGuild(i)}>{guild.name}</li>
        })}
        </ul>
        </form>
    )
}

export default GuildSelector