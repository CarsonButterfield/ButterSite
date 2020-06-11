import React, { useState } from "react"
import Models from '../../Models'

const MessageForm = () => {
    const [ form , updateForm ] = useState({
        user:"ButterBots House",
        msg:"",
        command:"message"

    })
    const handleChange = (e) => {
        updateForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <form id="command-form">
            <input type="text" onChange={handleChange} name="msg" value={form.msg}/>
            <input type="text" onChange={handleChange} name="user" value={form.user}/>
            <button onClick = {e => {e.preventDefault(); Models.Message.sendMessageToUser(form)}}/>
        </form>
    )

}

export default MessageForm