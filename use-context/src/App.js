import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import Payment from './Components/Payment';
import Currency from "./Currency.json";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {



  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const updateAmount = (e) => {
    setAmount(e);
  }

  const updateCurrency = () => {
    setCurrency("EURO");
    //console.log(currency);
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className='mb-3'>Change from BAM to other currencies</h1>
        <input onInput={(e) => updateAmount(e.target.value)} />
        <div>
          <label>Choose currency: </label>
          <select>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <CurrencyContext.Provider value={{ currency, updateCurrency }}>
          <AmountContext.Provider value={{ amount, updateAmount }}>
            <Payment />
          </AmountContext.Provider>
        </CurrencyContext.Provider>

        {/* <button onClick={updateCurrency}>Change currency</button>
      <input onInput={(e) => updateAmount(e.target.value)} /> */}


      </div>

    </div >
  );
}

export default App;
