import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import Payment from './Components/Payment';
import CurrencyList from "./Currency.json";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);
export const ConvertedAmountContext = createContext(0);

function App() {

  const [currency, setCurrency] = useState("USD");
  const [value, setValue] = useState(0.5918);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const updateAmount = (e) => {
    setAmount(Number(e));
  }

  useEffect(() => {
    setConvertedAmount(amount * value);
  }, [amount, value]);

  const updateCurrency = (valuta) => {
    const selected = CurrencyList.find(c => c.valuta === valuta)
    setCurrency(selected.valuta);
    setValue(selected.value);
    //console.log("Valuta:" + currency);
    //console.log("Vrijednost:" + value);
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className='mb-3'>Change from BAM to other currencies</h1>
        <input onInput={(e) => updateAmount(e.target.value)} />
        <div>
          <label>Choose currency: </label>
          <select onChange={(e) => updateCurrency(e.target.value)}>

            {CurrencyList.map(currency => {
              return (<option key={currency.id} value={currency.valuta}>{currency.valuta}</option>)
            })}
          </select>
        </div>

        <CurrencyContext.Provider value={{ currency, updateCurrency }}>
          <AmountContext.Provider value={{ amount, updateAmount }}>
            <ConvertedAmountContext.Provider value={{ convertedAmount, setConvertedAmount }}>
              <Payment />
            </ConvertedAmountContext.Provider>
          </AmountContext.Provider>
        </CurrencyContext.Provider>

        {/* <button onClick={updateCurrency}>Change currency</button>
      <input onInput={(e) => updateAmount(e.target.value)} /> */}


      </div>

    </div >
  );
}

export default App;
