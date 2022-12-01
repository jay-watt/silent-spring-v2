import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Box from './Box'
import Controls from './Controls'

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[3.6, 2.4, 0]} />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}

export default App
