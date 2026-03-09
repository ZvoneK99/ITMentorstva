import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Components/Movies';
import Navigation from './Templates/Snippets/Navigation';
import Footer from './Templates/Snippets/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Movies />
      <Footer />
    </>
  );
}

export default App;
