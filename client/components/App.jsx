import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// import Nav from './Nav'
import Box from './Box'
// import Profile from './Profile'

function App() {
  return (
    <>
      {/* <Nav /> */}
      <main className="flex items-center justify-center h-screen">
        {/* <Routes>
          <Route path="/" element={<Box />}
        </Routes> */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}

export default App
