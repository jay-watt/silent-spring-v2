import * as THREE from 'three'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useThree, useLoader } from '@react-three/fiber'

function Sound({ url }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const isMounted = useRef(true)

  const sound = useRef()
  const { camera } = useThree()

  // construct new audio context or is maybe already set to default
  // const audioCtx = new AudioContext()
  // audioCtx.resume()
  // will need a clean up function
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  function handleSpaceBar() {
    setIsPlaying(true)
  }

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setLoop(true)
    sound.current.play()
    camera.add(listener)
    return () => {
      // isMounted.current(false)
      camera.remove(listener)
    }
  }, [])

  return (
    <group onKeyPress={handleSpaceBar}>
      <positionalAudio ref={sound} args={[listener]} />
    </group>
  )
}

export default Sound
