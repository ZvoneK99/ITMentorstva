import './style.css';
import Products from './Components/Products';
import { useState } from 'react';



function App() {
 let [tax, setTax] = useState(0)


  return (
    <>
      
      <input type="text" placeholder='Enter tax' onInput={(e) => setTax(e.target.value)}/>
      <Products tax={tax}/>
    </>    
  );
}

export default App;