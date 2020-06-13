
import { atom } from 'recoil'

import userData from './user'

export const msg = atom({
    default:{user:"Ya boi", content:"Yeet"},
    key:"userMsg"
})

export default {
    userData,
    msg
}