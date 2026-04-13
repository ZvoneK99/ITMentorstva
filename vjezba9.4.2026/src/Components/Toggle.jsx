import { useState } from "react";

export const Toggle = () => {
    const [visible, setVisible] = useState(true);

    const ChangeState = () => {
        setVisible(v => !v);
    }

    return (<>
        {visible && <h1>Text</h1>}
        <button onClick={ChangeState}>Promjeni</button>
    </>);
}