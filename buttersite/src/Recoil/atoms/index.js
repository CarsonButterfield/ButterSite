
import { atom } from 'recoil'

import UserData from './user'

import UserGuildData from './UserGuildData'

import ActiveGuild from './ActiveGuild'

export const msg = atom({
    default:{user:"Ya boi", content:"Yeet"},
    key:"userMsg"
})

export default {
    UserData,
    UserGuildData,
    msg,
    ActiveGuild
}