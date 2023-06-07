import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './pages/Calculator';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
