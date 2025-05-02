import { useState } from 'react'
import './counter.css'




export default function Counter(){
    const [Count, setCount] = useState(0)


    function increaseCount () {
        setCount(prevCount => prevCount + 1)
    }

    return(
      
        <button class='btn p-2 m-4 button' onClick={increaseCount} >You clicked the button {Count} times!</button>
      
    )
}