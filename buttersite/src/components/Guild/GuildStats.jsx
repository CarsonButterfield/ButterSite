import React from 'react'
import XBarChart from '../Graphs/XBarChart'
import TotalHours from '../Graphs/Text-Descriptors/TotalHours'
import SimplePie from '../Graphs/SimplePie'
const GuildStats  = ( props ) => {
    return(
        <>
        <TotalHours checkIfEmpty={true} data={props.data}/>
        <XBarChart checkIfEmpty={true} data={props.data}/>
        </>
    )
}


export default GuildStats