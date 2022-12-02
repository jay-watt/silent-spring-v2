import React, { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Box from './Box'
import Controls from './Controls'
import Wait from './Wait'
import List from './List'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  function handleStart() {
    setIsPlaying(true)
  }

  extend({ OrbitControls })

  return (
    <>
      <div onDoubleClick={handleStart}>{isPlaying ? <List /> : <Wait />}</div>
    </>
  )
}

export default App
