import React, { useState, useEffect } from 'react'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Wait from './Wait'
import List from './List'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  function handleStart() {
    setIsPlaying(true)
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsPlaying(false)
      }
    }
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  useEffect(() => {
    const handleEnter = (event) => {
      if (event.keyCode === 13) {
        setIsPlaying(true)
      }
    }
    document.addEventListener('keydown', handleEnter)

    return () => {
      document.removeEventListener('keydown', handleEnter)
    }
  }, [])

  extend({ OrbitControls })

  return (
    <>
      <div className="mainDiv">{isPlaying ? <List /> : <Wait />}</div>
    </>
  )
}

export default App
