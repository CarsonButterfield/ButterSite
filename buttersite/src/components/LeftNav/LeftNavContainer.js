import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import guildData from '../../Recoil/selectors/ActiveGuildData'
import GuildSelector from './GuildSelector/GuildSelector'
import "./LeftNav.css"


const LeftNavContainer = () => {
    const { guild } = useRecoilValue(guildData)
    return(
        <section id="left-nav">
           <GuildSelector/>
        </section>
    )


}

export default LeftNavContainer