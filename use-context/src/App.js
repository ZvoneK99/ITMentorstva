import { createContext, useState } from 'react';
import './App.css';
import Payment from './Components/Payment';

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext("");

function App() {

  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const updateAmount = (e) => {
    setAmount(e);
    console.log(amount);
  }

  const updateCurrency = () => {
    setCurrency("EURO");
    //console.log(currency);
  }

  return (
    <div>

      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <Payment />
        <button onClick={updateCurrency}>Change currency</button>
        <input onInput={(e) => updateAmount(e.target.value)} />
      </CurrencyContext.Provider>

    </div >
  );
}

export default App;
