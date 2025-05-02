import { useState } from 'react'
import './counter.css'




export default function Counter(){
    const [Count, setCount] = useState(0)


    function increaseCount () {
        setCount(prevCount => prevCount + 1)
    }

    return(
      
        <button className='bg-[#E17000] p-2 m-4 rounded-md text-white' onClick={increaseCount}>You clicked {Count} times!</button>
      
    )
}