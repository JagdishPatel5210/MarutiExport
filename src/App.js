import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home.jsx';

import ScrollToTopButton from './Pages/ScrollToTopButton';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
         
        <ScrollToTopButton />
    </>
  );
}

export default App;
