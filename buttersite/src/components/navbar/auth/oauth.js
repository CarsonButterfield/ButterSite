import React, { useEffect  } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import atoms from '../../../Recoil/atoms'
import axios from 'axios'
import './auth.css'
import config from '../../../config.json'
const { UserData, UserGuildData } = atoms 

const connectAPISession = (token) => {
   return axios.post(`${config.api}/login` ,token, {withCredentials:true})
   
}


const Oauth2 = (props) => {
    const setUserGuildData = useSetRecoilState(UserGuildData)
    const [user, setUser] = useRecoilState(UserData)

        const logout = () => {
            console.log(user)
            axios.delete(`${config.api}/logout`,{withCredentials:true})
            .then(()=>{
                setUser({loggedIn:false})
                setUserGuildData([])
            })
        }
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        if (fragment.has("access_token") && !user.loggedIn) {
            const checkToken = async() => {
                const accessToken = fragment.get("access_token");
                const tokenType = fragment.get("token_type");
                const userData = await connectAPISession({accessToken,tokenType})
                console.log(userData)
                if(userData.status === 200){
                    setUser({...userData.data.user, loggedIn:true})
                    setUserGuildData(userData.data.guilds)
                    

                }
            }
            checkToken()   

        }
    },[ user , setUser , setUserGuildData])
    return(
        <div id="auth">
       {!user.loggedIn ? 
       <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=233458197338390528&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds">Log In</a>
        : <Link to="/" onClick={logout}>Logout</Link>
    }

        </div>   
    )
}


export default Oauth2