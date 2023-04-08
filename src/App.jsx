import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
