import React from 'react'
import XBarChart from '../Graphs/XBarChart'
import TotalHours from '../Graphs/Text-Descriptors/TotalHours'
import SimplePie from '../Graphs/SimplePie'
const memberStats  = ( props ) => {
    return(
        <>
        <TotalHours data={props.data}/>
        <SimplePie setOne={props.data.length} setTwo={Object.keys(props.guild.members).length -props.data.length}/>
        <XBarChart data={props.data}/>
        </>
    )
}

export default memberStats 