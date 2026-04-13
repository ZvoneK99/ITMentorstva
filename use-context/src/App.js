import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useReducer, useState } from 'react';
import Payment from './Components/Payment';
import CurrencyList from "./Currency.json";
import { initialUserState, userReducer } from './Reducers/User';

//useContext koje ću koristiti
export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);
export const ConvertedAmountContext = createContext(0);
export const InitialCurrencyContext = createContext("BAM")

function App() {

  const [userState, dispatch] = useReducer(userReducer, initialUserState)

  const [initialCurrency, setInitialCurrency] = useState("BAM") //ova početna inicijalna valuta
  const [initialValue, setInitialValue] = useState(1)
  const [currency, setCurrency] = useState("USD");
  const [value, setValue] = useState(0.5918);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  // const [username, setuserName] = useState(null);
  // const [money, setMoney] = useState(null);
  // const [isUserCreated, setIsUserCreated] = useState(false);

  //pretvaranje inputa u num
  const updateAmount = (e) => {
    setAmount(Number(e));
  }

  //množenje valute sa unesenim brojem
  useEffect(() => {
    setConvertedAmount(amount * (value / initialValue));
  }, [amount, value, initialValue]);

  // const updateName = (e) => {
  //   setuserName(e);
  //   //console.log(username);
  // }


  const saveUser = () => {
    if (userState.username === null || userState.username.trim() === "" || isNaN(userState.money) || userState.money === null) {
      return;
    }
    dispatch({ type: "SET_USER_CREATED", payload: true });
  }

  //pronalazak vrijednosti početne valute
  const updateInitialCurrency = (valuta) => {
    const selected = CurrencyList.find(c => c.valuta === valuta)
    setInitialCurrency(selected.valuta);
    setInitialValue(selected.value);
  }
  //pronalazak vrijednosti valute
  const updateCurrency = (valuta) => {
    const selected = CurrencyList.find(c => c.valuta === valuta)
    setCurrency(selected.valuta);
    setValue(selected.value);
  }

  return (
    <div>

      <div className="d-flex justify-content-center align-items-center flex-column mt-5">

        {!userState.isUserCreated &&
          <form>
            <input placeholder="Enter name" onInput={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} />
            <input placeholder="Enter money" onInput={(e) => dispatch({ type: "SET_MONEY", payload: e.target.value })} />
            <button type='button' onClick={saveUser}>Create User</button>
          </form>
        }

        <h1 className='mb-3'>Currency calculator</h1>
        <input placeholder='Enter amount' onInput={(e) => updateAmount(e.target.value)} />
        <div>
          <label>Choose initial currency: </label>
          <select onChange={(e) => updateInitialCurrency(e.target.value)}>

            {CurrencyList.map(currency => {
              return (<option key={currency.id} value={currency.valuta}>{currency.valuta}</option>)
            })}
          </select>
        </div>
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
              <InitialCurrencyContext.Provider value={{ initialCurrency, updateInitialCurrency }}>
                <Payment />
              </InitialCurrencyContext.Provider>
            </ConvertedAmountContext.Provider>
          </AmountContext.Provider>
        </CurrencyContext.Provider>

      </div>

    </div >
  );
}

export default App;
