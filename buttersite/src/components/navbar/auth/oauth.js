import React, { useEffect  } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import atoms from '../../../Recoil/atoms'
import axios from 'axios'
import './auth.css'
import config from '../../../config.json'
const { UserData, UserGuildData } = atoms 





const Oauth2 = (props) => {
    const setUserGuildData = useSetRecoilState(UserGuildData)
    const [user, setUser] = useRecoilState(UserData)
    const connectAPISession = ({data}) => {
        if(data.login){
            console.log('login')
        axios.post(`${config.api}/login` ,data, {withCredentials:true})
        .then((res => {
            setUser({...res.data.user, loggedIn:true})
            setUserGuildData(res.data.guilds)
        }))}
       
    }
    const openWindow = () => {
        window.removeEventListener('message', connectAPISession);
        window.open('https://discord.com/api/oauth2/authorize?client_id=233458197338390528&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=token&scope=identify%20email%20guilds',"login","width=600,height=1000")
        window.addEventListener('message',connectAPISession)
    }
        const logout = () => {
            console.log(user)
            axios.delete(`${config.api}/logout`,{withCredentials:true})
            .then(()=>{
                setUser({loggedIn:false})
                setUserGuildData([])
            })
        }
    
    return(
        <div id="auth">
       {!user.loggedIn ? 
       <button onClick={openWindow} id="login" >Log In</button>
        : <Link to="/" onClick={logout}>Logout</Link>
    }
        </div>   
    )
}


export default Oauth2