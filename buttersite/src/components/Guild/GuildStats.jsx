import React from 'react'
import XBarChart from '../Graphs/XBarChart'
import TotalHours from '../Graphs/Text-Descriptors/TotalHours'
import SimplePie from '../Graphs/SimplePie'
const GuildStats  = ( props ) => {
    console.log(props.guild.members)
    return(
        <>
        <TotalHours data={props.data}/>
        <XBarChart data={props.data}/>
        </>
    )
}


export default GuildStats