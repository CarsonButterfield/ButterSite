import React from 'react'
import {Link} from 'react-router-dom'
import './GraphSelector.css'
const GraphRouter = ( props ) => {

return( 

<li id="GraphSelector">
    <ul><Link to='/guild'>Guild</Link></ul>
    <ul><Link to='/users'>Users</Link> </ul>
</li>
)
}

export default GraphRouter