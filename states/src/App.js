import './App.css';
import Counter from './Components/Counter';
import NameInput from './Components/NameInput';
import ToggleText from './Components/ToggleText';
import ShowHideText from './Components/showHideText';
import MultipleToggleText from './Components/MultipleToggleText';
import CounterWithLimits from './Components/CounterWithLimits';

function App() {
  return (
   <>
   <Counter/>
   <hr></hr>
   <NameInput/>
   <hr></hr>
  <ToggleText/>
   <hr></hr>
    <ShowHideText/>
   <hr></hr>
   <MultipleToggleText/>
   <hr></hr>
   <CounterWithLimits/>
   <hr></hr>
   <hr></hr>

   </>
  );
}

export default App;
