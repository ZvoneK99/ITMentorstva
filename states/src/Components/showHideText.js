import { useState } from "react";


function ShowHideText() {

    let [visible, setVisible] = useState(false);

    return (
        <>
        <button onClick={() => setVisible(v => !v)}>Prikazi tekst</button>
        {visible && <h1>IKA</h1>}
        
        </>

    );
}
export default ShowHideText;