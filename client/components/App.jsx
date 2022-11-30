import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Fruits from './Fruits'
import Profile from './Profile'

function App() {
  return (
    <>
      <Nav />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Fruits />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App
