import { useState } from "react";


function MultipleToggletext() {

    let [currentIndex, setCurrentIndex] = useState(0);

    const texts = ["Prvi", "Drugi", "Treći"];

    return (
        <>
        <button onClick={() => setCurrentIndex(i => (i+1) % texts.length)}>Prikazi</button>
        <h1>{texts[currentIndex]}</h1>
        </>
    )
}
export default MultipleToggletext;