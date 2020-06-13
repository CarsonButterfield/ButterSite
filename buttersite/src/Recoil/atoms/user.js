import { atom } from 'recoil'

const userData = atom({
    key:"userData",
    default:{
        id:"",
        username:"",
        loggedIn:false
    }
})

export default userData