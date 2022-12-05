import React, { useState, useEffect } from 'react'

import Wait from './Wait'
import Birds from './Birds'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
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

  return <div className="mainDiv">{isPlaying ? <Birds /> : <Wait />}</div>
}

export default App
