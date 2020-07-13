import React from 'react'

import { useRecoilValue } from 'recoil'

import './NavBar.css'
import OAuth2 from './auth/oauth'

import  atoms  from '../../Recoil/atoms'
const { UserData } = atoms

const NavBar = () => {
    const user = useRecoilValue(UserData)
    return(
        <nav>
            <OAuth2/>
            {user.loggedIn && <img id="profile-photo" alt="profile" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} />}
        </nav>
    )
}

export default NavBar