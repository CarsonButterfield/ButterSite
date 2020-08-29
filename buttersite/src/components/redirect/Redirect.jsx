import React, {useEffect} from 'react'


const Redirect = (props) => {
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
                const accessToken = fragment.get("access_token");
                const tokenType = fragment.get("token_type");
                window.opener.postMessage({accessToken,tokenType,login:true})
                window.close()
    })
    return(
        <p> Loading...</p>
    )
}


export default Redirect