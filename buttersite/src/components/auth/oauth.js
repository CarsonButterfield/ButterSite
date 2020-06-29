import React, { useEffect  } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import atoms from '../../Recoil/atoms'
import axios from 'axios'

import config from '../../config.json'
const { userData, UserGuildData } = atoms 

const connectAPISession = (token) => {
   return axios.post(`${config.api}/login` ,token, {withCredentials:true})
   
}


const Oauth2 = (props) => {
    const setUserGuildData = useSetRecoilState(UserGuildData)
    console.log(useRecoilState(userData))
    const [user, setUser] = useRecoilState(userData)

        const logout = () => {
            axios.delete(`${config.api}/logout`,{withCredentials:true})
            .then(()=>{
                setUser({loggedIn:false})
                setUserGuildData(null)
            })
        }
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        if (fragment.has("access_token") && !user.loggedIn) {
            const checkToken = async() => {
                const accessToken = fragment.get("access_token");
                const tokenType = fragment.get("token_type");
                const userData = await connectAPISession({accessToken,tokenType})
                if(userData.status === 200){
                    setUser({...userData.data.user, loggedIn:true})
                    setUserGuildData({guilds:userData.data.guilds})
                    

                }
            }
            checkToken()   

        }
    },[user,checkToken])
    return(
        <div id="login">
       {!user.loggedIn ? 
       <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=233458197338390528&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds">Identify Yourself</a>
        : <Link to="/" onClick={logout}>Logout</Link>
    }
        {user.loggedIn && user.username}
        </div>   
    )
}


export default Oauth2