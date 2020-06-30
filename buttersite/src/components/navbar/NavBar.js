import React from 'react'

import { useRecoilValue } from 'recoil'

import './NavBar.css'
import OAuth2 from './auth/oauth'
import GuildSelector from './GuildSelector'
import  atoms  from '../../Recoil/atoms'
const { UserData } = atoms

const NavBar = () => {
    const user = useRecoilValue(UserData)
    return(
        <nav>
            <OAuth2/>
            {user.loggedIn && <img id="profile-photo" alt="profile-photo" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} />}
            <GuildSelector/>
        </nav>
    )
}

export default NavBar