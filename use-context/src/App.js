import { createContext, useState } from 'react';
import './App.css';
import Payment from './Components/Payment';

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

      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <Payment />
        </AmountContext.Provider>
      </CurrencyContext.Provider>

      <button onClick={updateCurrency}>Change currency</button>
      <input onInput={(e) => updateAmount(e.target.value)} />
    </div >
  );
}

export default App;
