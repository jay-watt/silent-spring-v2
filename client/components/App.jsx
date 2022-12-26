import React, { useState, useEffect } from 'react'

import Frame from './Frame'
import Landing from './Landing'

export default function App() {
  const [playAudio, setPlayAudio] = useState(false)

  // TODO check esc function
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
        setPlayAudio(true)
      }
    }
    document.addEventListener('keydown', handleEnter)

    return () => {
      document.removeEventListener('keydown', handleEnter)
    }
  }, [])

  return playAudio ? <Frame /> : <Landing />
}
