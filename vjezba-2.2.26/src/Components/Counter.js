import { useState } from "react";


function Counter() {
    let [count, setCount] = useState(0);


    function Plus() {
        setCount(count + 1);
    }
    function Minus() {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(0);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <h1> Brojač: {count}</h1>
            <button onClick={e => Plus()}>Povećaj za 1</button>
            <button onClick={e => Minus()}>Smanji za 1</button>
        </div>
    );
}
export default Counter;