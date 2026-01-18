import { useState } from "react";

function NameInput() {

    const [name, setName] = useState("Zvone");

    function handleChange(e) {
    setName(e.target.value);
    }

    return (
        <>
        <input type='text' onChange={handleChange}/>
        <h1>Name: {name}</h1>
        </>
     );
}
export default NameInput;