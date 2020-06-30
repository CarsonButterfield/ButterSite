import { atom } from 'recoil'

//contains the ID of the currently active guild, to avoid storing in memory twice 
const activeGuild = atom({
    key:"activeGuild",
    default:null
})

export default activeGuild