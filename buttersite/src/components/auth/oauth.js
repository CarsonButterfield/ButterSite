import React from 'react'
import { useRecoilState } from 'recoil'
import atoms from '../../Recoil/atoms'
import axios from 'axios'
const { userData } = atoms 

const connectAPISession = ({id}) => {
    axios.post("http://localhost:4000/login",{id}, {withCredentials:true})
}
const testSession = () => {
    axios.get('http://localhost:4000/testsession',{withCredentials:true})
    .then(res => console.log(res))
}
const Oauth2 = (props) => {
    const [user, setUser] = useRecoilState(userData)

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    if (fragment.has("access_token") && !user.loggedIn) {
        const accessToken = fragment.get("access_token");
        const tokenType = fragment.get("token_type");
        fetch('https://discordapp.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(response => {
                connectAPISession(response)
                setUser({...response,loggedIn:true})
            })
            .catch(console.error);

    }
    return(
        <div id="login">
        <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=233458197338390528&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds">Identify Yourself</a>
        <button onClick={testSession}>test</button>
        {user.loggedIn && user.username}
        </div>   
    )
}


export default Oauth2