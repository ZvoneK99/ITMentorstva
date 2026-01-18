import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    return (
        <>
        <button onClick={() => setCount(count+1)}>Povećaj</button>
        <button onClick={() => setCount(count-1)}>Smanji</button>
        <h1>Broj: {count}</h1>
        </>
    );
}

export default Counter;