import { useReducer, useState } from 'react';
import { reducer, initialState } from './Reducer/Count';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [countState, dispatch] = useReducer(reducer, initialState);
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h5>Count: {countState.count}</h5>
      <button type='button' onClick={() => dispatch({ type: "SET_INCREASE" })}>INCREMENT</button>
      <button type='button' onClick={() => dispatch({ type: "SET_DECREASE" })}>DECREMENT</button>
      <button type='button' onClick={() => dispatch({ type: "SET_RESET" })
      }> RESET</button >

    </div >
  );
}

export default App;
