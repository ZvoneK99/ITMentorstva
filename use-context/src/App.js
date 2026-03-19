import { createContext, useState } from 'react';
import './App.css';
import Payment from './Components/Payment';

export const CurrencyContext = createContext("USD");

function App() {

  const [currency, setCurrency] = useState("USD");

  const updateCurrency = () => {
    setCurrency("EURO");
    //console.log(currency);
  }

  return (
    <div>

      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <Payment />
        <button onClick={updateCurrency}>Change currency</button>
      </CurrencyContext.Provider>

    </div >
  );
}

export default App;
