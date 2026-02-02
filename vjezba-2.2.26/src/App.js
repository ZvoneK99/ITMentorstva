import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter';
import Input from './Components/Input';
import Toggle from './Components/Toggle';

function App() {
  return (
    <>
      <div className="bg-primary w-50">
        <Counter />
      </div>
      <div className="bg-secondary w-50 mt-5">
        <Input />
      </div>
      <div className='mt-5'>
        <Toggle />
      </div>
    </>
  );
}

export default App;
