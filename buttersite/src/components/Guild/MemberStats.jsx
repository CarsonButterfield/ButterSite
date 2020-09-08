import React from 'react'
import XBarChart from '../Graphs/XBarChart'
import TotalHours from '../Graphs/Text-Descriptors/TotalHours'
import SimplePie from '../Graphs/SimplePie'
const memberStats  = ( props ) => {
    const setTwo = props.guild ? Object.keys(props.guild.members).length -props.data.length : null
    return(
        <>
        <TotalHours checkIfEmpty={true} data={props.data}/>
        <SimplePie checkIfEmpty={true}  setOne={props.data.length} setTwo={setTwo}/>
        <XBarChart checkIfEmpty={true} data={props.data}/>
        </>
    )
}

export default memberStats 