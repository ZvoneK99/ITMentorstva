import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h5>Count: {count}</h5>
      <button>INCREMENT</button>
      <button>DECREMENT</button>
      <button>RESET</button>

    </div>
  );
}

export default App;
