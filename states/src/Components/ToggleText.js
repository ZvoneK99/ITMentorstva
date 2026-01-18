import { useState } from "react";

function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(v => !v)}>
        Prikaži / Sakrij
      </button>

      {visible && (
        <h1>Tekst koji se prikaže ili sakrije!</h1>
      )}
    </>
  );
}

export default ToggleText;
