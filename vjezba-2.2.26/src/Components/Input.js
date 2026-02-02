import { useState } from "react";

function Input() {

    let [userInput, setUserInput] = useState("Niste ništa upisali");

    return (
        <div className="d-flex justify-content-center">
            <input type="text" placeholder="Unesite neki tekst" onInput={(e) => setUserInput(e.target.value)} />
            <h2>{userInput}</h2>
        </div>
    );
}
export default Input;