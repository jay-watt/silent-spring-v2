import React from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Box from './Box'
import Controls from './Controls'

function App() {
  extend({ OrbitControls })
  return (
    <>
      <main className="flex items-center justify-center h-screen bg-violet-300	">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[3.6, 2.4, 0]} />
          <Box position={[5.9, 6.0, 1.0]} />
          <Controls />
        </Canvas>
      </main>
    </>
  )
}

export default App
