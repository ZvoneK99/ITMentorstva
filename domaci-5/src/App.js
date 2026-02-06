import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Video from './Pages/Video';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
