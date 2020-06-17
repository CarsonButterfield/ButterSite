import React from "react"
import Models from '../../Models'
import { useRecoilState } from 'recoil'

import atoms from '../../Recoil/atoms/index'

const { msg } = atoms 
console.log(msg)

const MessageForm = ({userToken}) => {
    const [form, updateForm] = useRecoilState(msg);
   
    const handleChange = (e) => {
        console.log(form)
        updateForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <form id="command-form">
            <input type="text" onChange={handleChange} name="content" value={form.content}/>
            <input type="text" onChange={handleChange} name="user" value={form.user}/>
            <button onClick = {e => {e.preventDefault(); Models.Message.sendMessageToUser(form)}}/>
        </form>
    )

}

export default MessageForm