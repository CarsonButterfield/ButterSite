import React from 'react'
import { useRecoilValue, selector } from 'recoil'
 

import reversedMsg from '../Recoil/selectors/reverse'
import atoms from '../Recoil/atoms/index'
const { msg } = atoms
const Banner = () => {
    const msgData = useRecoilValue(msg);
    const Reversed  = useRecoilValue(reversedMsg)

    return(
    <>
    <h1>{msgData.user}</h1>
    <h2>{msgData.content}</h2>
    <h2> Reversed </h2>
    <h2> {Reversed} </h2>
    </>
    )
    
}

export default Banner