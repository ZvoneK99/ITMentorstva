import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


//path = http://localhost:3000
//path = "about" => http://localhost:3000/about
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
      {/* <GetAllVideos /> */}
    </>
  );
}

export default App;
