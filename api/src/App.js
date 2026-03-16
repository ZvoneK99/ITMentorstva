import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Components/Movies';
import Navigation from './Templates/Snippets/Navigation';
import Footer from './Templates/Snippets/Footer';
import Search from './Components/Search';

function App() {
  return (
    <>
      <Navigation />
      <Search />
      <Footer />
    </>
  );
}

export default App;
