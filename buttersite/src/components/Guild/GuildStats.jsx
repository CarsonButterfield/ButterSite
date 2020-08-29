import React from 'react'
import XBarChart from '../Graphs/XBarChart'
import TotalHours from '../Graphs/Text-Descriptors/TotalHours'

const GuildStats  = ( props ) => {

    return(
        <>
        <TotalHours data={props.data}/>
        <XBarChart data={props.data}/>
        </>
    )
}


export default GuildStats