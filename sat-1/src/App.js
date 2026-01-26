import './style.css';
import Products from './Components/Products';
import { useState } from 'react';



function App() {
 let [tax, setTax] = useState(0)

  return (
    <>
      <Products tax={tax}/>
      <Products tax={20} />

      <Products tax={55}/>
      <input type="text" placeholder='Enter tax' onInput={(e) => setTax(e.target.value)}/>

    </>    
  );
}

export default App;