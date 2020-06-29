import React from 'react'
import { useRecoilValue } from 'recoil'
 


import  atoms  from '../Recoil/atoms/'
const { userData , UserGuildData} = atoms

const Banner = () => {
    const user = useRecoilValue(userData)
    const  { guilds }  = useRecoilValue( UserGuildData )  
    console.log({guilds})
    return(
    <>
    <h1>{JSON.stringify(user)}</h1>
    {guilds && guilds.map(guild => <p>{guild.name}</p>)}

    </>
    )
    
}

export default Banner