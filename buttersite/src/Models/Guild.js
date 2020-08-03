import axios from 'axios'
import config from  '../config.json'

function wrapPromise(promise) {
    let status = 'pending'
    let response
    const suspender = promise.then(
      (res) => {
        status = 'success'
        response = res
      },
      (err) => {
        status = 'error'
        response = err
      },
    )  
    const read = () => {
        switch (status) {
          case 'pending':
            throw suspender
          case 'error':
            throw response
          default:
            return response
        }
      }
    
      return { read }
    }


class Guild{
    static getGuildData(guild){
      console.log(guild)
      if(guild){
        console.log('beep')
        return axios.get(`${config.api}/guild/${guild.id}/data`, {withCredentials:true})
      }
      return null
    }
}

export default Guild