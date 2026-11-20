import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'


const App = () => {

  const user = {
    email: "evaan@gmail.com",
    password: "123456",
    name: "Evaan"
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App