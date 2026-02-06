import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Components/Video';


//path = http://localhost:3000
//path = "about" => http://localhost:3000/about
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </BrowserRouter>
      {/* <GetAllVideos /> */}
    </>
  );
}

export default App;
