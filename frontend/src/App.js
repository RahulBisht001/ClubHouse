import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Navigation from './Components/shared/Navigation/Navigation'
import Home from './Pages/Home/Home'


import Authenticate from './Pages/Auth/Authenticate'
import Activate from './Pages/Activate/Activate'
import Rooms from './Pages/Rooms/Rooms'

import { useSelector } from 'react-redux'
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh'

function App() {

  const { loading } = useLoadingWithRefresh();

  return loading ?
    "Loading . . ." :
    (
    <BrowserRouter>

      <Navigation />

      <Routes>

        <Route path='/'
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route path='/authenticate'
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route path='/activate'
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />

        <Route path='/rooms'
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter >
  );
}


const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth)
  return isAuth ?
    < Navigate to={'/rooms'} />
    : children

}

const SemiProtectedRoute = ({ children, ...rest }) => {
  const { isAuth, user } = useSelector((state) => state.auth)
  return !isAuth ?
    < Navigate to={'/'} />
    : isAuth && !user.activated ? children : < Navigate to={'/rooms'} />
}


const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuth, user } = useSelector((state) => state.auth)
  return !isAuth ?
    < Navigate to={'/'} />
    : isAuth && !user.activated ? < Navigate to={'/activate'} /> : children
}

export default App;
