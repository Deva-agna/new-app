import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Pegawai from './pages/Pegawai'
import User from './pages/User'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/pegawai' element={<Pegawai/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
