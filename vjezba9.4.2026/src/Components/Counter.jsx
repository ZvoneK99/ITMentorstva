import { useState } from "react";

const Counter = () => {
    let [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
        else {
            setCounter(0);
        }
    }

    return (<>
        <button onClick={increaseCounter}>Povećaj</button>
        <h1>Brojač: {counter}</h1>
        <button onClick={decreaseCounter}>Smanji</button>
    </>);
}

export default Counter;