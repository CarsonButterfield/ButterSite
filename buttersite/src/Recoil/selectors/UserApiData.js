import { selector } from 'recoil'
import  userData  from '../atoms/user'
import config from "../../config.json"
import axios from 'axios'

export const UserApiSelector = selector({
    key:"userSelectorData",
    get:({get}) => {
        let user = get(userData)
        const fetcher = async() => {
            axios.get(`${config.api}/user`,{withCredentials:true})
            .then(data => {
                console.log(data)
                user = {...user,data}
            })
            .catch(err => console.log(err))
        }
        fetcher()
        return user

    }
})