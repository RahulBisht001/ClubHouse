import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';

import Navigation from './Components/shared/Navigation/Navigation';
import Home from './Pages/Home/Home'


function App() {
  return (
    <BrowserRouter>

      <Navigation
      />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
