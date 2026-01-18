import './style.css';
import Products from './Components/Products';
import { useState } from 'react';



function App() {
 let [tax, setTax] = useState(0)

function Tax(e) {
  setTax(e.target.value)
  console.log(tax);
}

  return (
    <>
      <Products tax={tax}/>
      <input type="text" placeholder='Enter tax' onInput={Tax}/>

    </>    
  );
}

export default App;