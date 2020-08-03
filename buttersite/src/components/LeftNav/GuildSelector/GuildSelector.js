
import React, { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import atoms from '../../../Recoil/atoms'
import ActiveGuildData from '../../../Recoil/selectors/ActiveGuildData'
import './GuildSelector.css'
import GuildCard from './GuildCard'
const { UserGuildData } = atoms

const GuildSelector = () => {
    const guilds  = useRecoilValue(UserGuildData)
    const [isOpen, setOpen ] = useState(false)
    const [isAnimating, setAnimating] = useState(false)
    const [showBorder, setBorder] = useState(false)
    const { guild } = useRecoilValue(ActiveGuildData)

    const toggleOpen = () => {
        if(isOpen){
            setAnimating(true)
            setOpen(false)
            setTimeout(() => {
                setBorder(false)
                setAnimating(false)
             
            },180)

        }
        else {
            if(!isAnimating){
            setBorder(true)
            setOpen(true)}
        }
    }
    return (
        <div id="guild-select-form">
        {guild && <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="guild-icon"/>}
        <h2 className="hover-white" onClick={toggleOpen}> {guild != null ? guild.name : "Choose a Guild"} </h2>
        <ul id="guild-drop-down" className={`${isOpen ? "" : 'slide-hide'} ${showBorder ? "" : 'border-hide'}`}>
        <div id="triangle" className={showBorder ? null : "border-hide"}></div>
        {guilds.map((guild, i )=>{
            return <GuildCard close={toggleOpen} guild={guild}  key={guild.id} idx={i}/>
        })}
        </ul>
        </div>
    )
}

export default GuildSelector