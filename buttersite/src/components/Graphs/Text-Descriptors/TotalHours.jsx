import React from 'react'
import './Descriptors.css'


const TotalHours = (props) => {
    let hours = 0
    props.data.forEach(log => {
        hours += log.y
    })
    hours =( hours / (1000 * 60 * 60)).toFixed(2)
    return(
         <p class="descriptor">{hours} Total hours tracked</p>   
    )

}


export default TotalHours