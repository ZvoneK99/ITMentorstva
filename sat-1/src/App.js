import './style.css';
import siteLogo from './logo.svg';

//napraviti varijablu name i ispisati poruku "Pozdrav, ja se zovem {name}"

let name = "Zvone";
let boja = "red";
let pozadina = "yellow";
function App() {
  return (
    <div className='ika'>
      <p>Pozdrav, moje ime je {name}</p>
      <img src={siteLogo} alt='logo' />
      <p style={{color: boja, background: pozadina}}>Ovo je moj prvi React app.</p>
    </div>
   
  );
}

export default App;