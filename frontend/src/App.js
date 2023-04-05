import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'

import Navigation from './Components/shared/Navigation/Navigation'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'


function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
