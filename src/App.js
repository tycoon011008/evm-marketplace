import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MyNFT from './pages/MyNFT';
import Detail from './pages/Detail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/mynft" element={<MyNFT />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
