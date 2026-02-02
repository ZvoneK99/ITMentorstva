import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter';
import Input from './Components/Input';
import Toggle from './Components/Toggle';
import NameList from './Components/NameList';

function App() {
  return (
    <>
      <div className="bg-primary w-50">
        <Counter />
      </div>
      <div className=" mt-2 w-50">
        <Input />
      </div>
      <div className='mt-5 bg-secondary w-50'>
        <Toggle />
      </div>
      <div className='mt-5 w-50'>
        <NameList />
      </div>
    </>
  );
}

export default App;
