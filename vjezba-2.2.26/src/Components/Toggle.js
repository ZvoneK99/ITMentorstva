import { useState } from "react";


function Toggle() {
    let [btn, setBtn] = useState("OFF")

    function ChangeBtnValue() {

        if (btn === "OFF") {
            setBtn("ON");
        }
        else {
            setBtn("OFF");
        }
    }


    return (
        <>
            <button onClick={ChangeBtnValue}>{btn}</button>
        </>
    );
}
export default Toggle;