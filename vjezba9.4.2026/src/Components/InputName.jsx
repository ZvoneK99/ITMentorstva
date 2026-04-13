import { useState } from "react";


const InputName = () => {
    const [name, setName] = useState("");
    const ChangeName = (e) => {
        setName(e)
    }

    return (<>
        <input placeholder="Enter name" onChange={(e) => ChangeName(e.target.value)} />
        <h1>Pozz {name}</h1>
    </>);

}
export default InputName;