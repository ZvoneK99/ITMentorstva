import './App.css';
import Movie from './Components/Movie';
import SearchBar from './Components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="movie-search-container d-flex justify-content-center align-items-center flex-column">
      <SearchBar />
      <Movie />
    </div >
  );
}

export default App;
