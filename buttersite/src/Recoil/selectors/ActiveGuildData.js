import { selector } from 'recoil' 
import axios from 'axios'
import UserGuildData from '../atoms/UserGuildData'
import ActiveGuild from '../atoms/ActiveGuild'
import config from '../../config.json'
function wrapPromise(promise) {
    let status = 'pending'
    let response
    const suspender = promise.then(
      (res) => {
        status = 'success'
        response = res
      },
      (err) => {
        status = 'error'
        response = err
      },
    )  
    const read = () => {
        switch (status) {
          case 'pending':
            throw suspender
          case 'error':
            throw response
          default:
            return response
        }
      }
    
      return { read }
    }
const ActiveGuildData = selector({
    key:'ActiveGuildData',
    get:({get}) => {
        const guildIdx = get(ActiveGuild)
        const guild = get(UserGuildData)[guildIdx]
        const guildData = wrapPromise(axios.get(`${config.api}/guildData`))
        return {guild , guildData}
    }
})

export default ActiveGuildData