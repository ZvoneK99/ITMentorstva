import './style.css';
import Products from './Components/Products';
import { useState } from 'react';

let name = "Zvone";

function clickOnButton() {
  console.log("Radi");
}



function App() {

let [name, setName] = useState("Hello world!");

function changeName(e) {
  setName(e.target.value);
  console.log(name);
}

  return (
    <>
      <Products tax="20"/>
      <button onClick={clickOnButton}>{name}</button>
      <input type='text' onInput={changeName}/>
      <p>My name is {name}</p>
    </>    
  );
}

export default App;