import React, { useState, useEffect } from 'react'

import Birds from './Birds'
import Instructions from './Instructions'
import Wait from './Wait'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 82) {
        document.location.reload(false)
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

  //TODO add delay and fade to instructions render

  return isPlaying ? (
    <div className="explore">
      <Instructions />
      <Birds />
    </div>
  ) : (
    <Wait />
  )
}

export default App
