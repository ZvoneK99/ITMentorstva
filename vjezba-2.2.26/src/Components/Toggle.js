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
        <div className="d-flex justify-content-center">
            <button onClick={ChangeBtnValue}>{btn}</button>
        </div>
    );
}
export default Toggle;