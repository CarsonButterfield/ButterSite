
import { atom } from 'recoil'

import userData from './user'

import UserGuildData from './UserGuildData'

export const msg = atom({
    default:{user:"Ya boi", content:"Yeet"},
    key:"userMsg"
})

export default {
    userData,
    UserGuildData,
    msg
}