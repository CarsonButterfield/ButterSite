import axios from 'axios'
class Message {
    static  async sendMessageToUser(msg){
        console.log('beep')
        try{
      
            axios.post("http://localhost:4000/command", {...msg})
            .then(res => console.log(res))
        }
        catch(err){
            console.log(err)
        }
    }
}

export default Message