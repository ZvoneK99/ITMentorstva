import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Templates/Snippets/Navigation';
import Footer from './Templates/Snippets/Footer';
import Search from './Components/Search';
import SearchProvider from "./Context/SearchProvider";

function App() {
  return (
    <>
      <Navigation />
      <SearchProvider>
        <Search />
      </SearchProvider>
      <Footer />
    </>
  );
}

export default App;
