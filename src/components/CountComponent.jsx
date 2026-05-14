import { useState } from "react"

function CountComponent(){

    const [count,setCount]=useState(0)

     function increment(){
        setCount(prevCount => prevCount + 1)
     }

     function decrement()
     {
        setCount(prevCount => prevCount - 1)
     }
     function reset(){
        setCount(0)
     }
    return (
    <div>
            {count}

            <button onClick={increment}>increment  </button>
            <button onClick={decrement}> decrement</button>
            <button onClick={reset}>reset </button>
    </div>
    )
}

export default CountComponent