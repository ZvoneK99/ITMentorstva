import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrayNames from './Components/ArrayNames';
import ArrayNumbers from './Components/ArrayNumbers';
import ObjectProducts from './Components/ObjectProducts';
import ObjectUsers from './Components/ObjectUsers';
import ArrayCities from './Components/ArrayCities';

function App() {

  return (
    <>
      <div>
        <ArrayNames />
      </div>
      <hr />
      <div>
        <ArrayNumbers />
      </div>
      <hr />
      <div>
        <ObjectProducts />
      </div>
      <hr />
      <div>
        <ObjectUsers />
      </div>
      <hr />
      <div>
        <ArrayCities />
      </div>
    </>

  );
}

export default App;
