import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Products';
import { useState } from 'react';

function App() {
  let [tax, setTax] = useState(0)

  return (
    <div className='container'>

      <Products tax={tax} />
      <div className='mt-2'>
        <input className='form-control' type="text" placeholder='Enter tax' onInput={(e) => setTax(e.target.value)} />
      </div>
    </div>

  );
}

export default App;