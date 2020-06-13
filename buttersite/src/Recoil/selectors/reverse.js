import { selector } from 'recoil'
import { msg } from '../atoms/index'

const backwardMsg = selector({
    key:"backwardsMsg",
    get: ({get}) => {
        const msgData = get(msg)

        return msgData.content.split("").reverse().join("") }
})


export default backwardMsg