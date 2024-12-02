import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

    </div>
  )
}

export default App