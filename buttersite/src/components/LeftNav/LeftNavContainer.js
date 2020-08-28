import React from 'react'
import GuildSelector from './GuildSelector/GuildSelector'
import GraphRouter from './GraphRouter/GraphRouter'
import "./LeftNav.css"


const LeftNavContainer = () => {
    return(
        <section id="left-nav">
           <GuildSelector/>
           <GraphRouter/>
        </section>
    )


}

export default LeftNavContainer