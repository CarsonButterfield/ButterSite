import { selector } from 'recoil' 
import Models from '../../Models'
import UserGuildData from '../atoms/UserGuildData'
import ActiveGuild from '../atoms/ActiveGuild'

const ActiveGuildData = selector({
    key:'ActiveGuildData',
    get:({get}) => {
        const guildIdx = get(ActiveGuild)
        const guild = get(UserGuildData)[guildIdx]
        const guildData = Models.Guild.getGuildData(guild)
        console.log(guildData)
        return {guild, guildData}
    }
})

export default ActiveGuildData