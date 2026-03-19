import { createContext } from 'react';
import './App.css';
import Payment from './Components/Payment';

export const CurrencyContext = createContext("USD");

function App() {


  return (
    <div>

      <CurrencyContext.Provider value={'USD'}>
        <Payment />
      </CurrencyContext.Provider>

    </div>
  );
}

export default App;
