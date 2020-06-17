import React from 'react'
import { useRecoilValue } from 'recoil'
 

import { UserApiSelector } from '../Recoil/selectors/UserApiData'
import atoms from '../Recoil/atoms/index'
const Banner = () => {
    const userData = useRecoilValue(UserApiSelector);

    return(
    <>
    <h1>{JSON.stringify(userData)}</h1>

    </>
    )
    
}

export default Banner