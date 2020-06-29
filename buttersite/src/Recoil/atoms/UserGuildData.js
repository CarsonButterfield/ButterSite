import { atom } from "recoil" 

const UserGuildData = atom({
    key:"userGuildData",
    default:{
        guilds:[]
    }
}) 


 export default UserGuildData