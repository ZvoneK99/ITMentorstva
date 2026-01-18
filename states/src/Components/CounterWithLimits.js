import { useState } from "react";


function CounterWithLimits(){

    const [count, setCount] = useState(5);

    return (
        <>
        <button onClick={c => setCount(c => Math.min(c+1, 10))}>Povećaj</button>
        <button onClick={c => setCount(c => Math.max(c-1, 0))}>Smanji</button>
        <h1>{count}</h1>
        </>
    )
}
export default CounterWithLimits;