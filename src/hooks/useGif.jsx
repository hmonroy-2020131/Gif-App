import { useState } from "react"
 
export const useGif = () => {
 
    const [gif, setGif] = useState('')
 
    const reqGif = async() =>{
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=uAKB4gdWedp1djuwjcM4MoBm3q0Cmsx5').then(async(resp) =>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }
 
    reqGif()
 
    const handleGetGif = () => {
        reqGif()
    }
 
 
    return {
        handleGetGif,
        gif
 
    }
}