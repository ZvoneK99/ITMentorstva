import './App.css';
import Payment from './Components/Payment';

function App() {
  const currency = "USD";
  return (
    <div>
      <Payment currency={currency} />
    </div>
  );
}

export default App;
