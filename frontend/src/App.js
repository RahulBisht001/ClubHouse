import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import { Toaster } from 'react-hot-toast'

import Navigation from './Components/shared/Navigation/Navigation'
import Home from './Pages/Home/Home'


import Loader from './Components/shared/Loader/Loader'
import Authenticate from './Pages/Auth/Authenticate'
import Activate from './Pages/Activate/Activate'
import Rooms from './Pages/Rooms/Rooms'

import { useSelector } from 'react-redux'
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh'
import Room from './Pages/Room/Room'


function App() {

  const { loading } = useLoadingWithRefresh();

  return loading ?
    <Loader message={"Loading , Please wait . . ."} /> :
    (
      <>
        <Toaster
          position='top-center'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              }
            },
            error: {
              theme: {
                primary: 'red',
              }
            }
          }}
        >
        </Toaster>

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

            <Route path='/room/:id'
              element={
                <ProtectedRoute>
                  <Room />
                </ProtectedRoute>
              }
            />

          </Routes>
        </BrowserRouter >
      </>
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


