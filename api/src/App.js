import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Components/Movies';
import Navigation from './Templates/Snippets/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <Movies />
    </>
  );
}

export default App;
