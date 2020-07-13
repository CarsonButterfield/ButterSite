import { selector } from 'recoil' 
import axios from 'axios'
import UserGuildData from '../atoms/UserGuildData'
import ActiveGuild from '../atoms/ActiveGuild'

const ActiveGuildData = selector({
    key:'ActiveGuildData',
    get:({get}) => {
        const guildIdx = get(ActiveGuild)
        const guild = get(UserGuildData)[guildIdx]
        // const guildData = wrapPromise(axios.get(`${config.api}/guildData`))
        return {guild}
    }
})

export default ActiveGuildData