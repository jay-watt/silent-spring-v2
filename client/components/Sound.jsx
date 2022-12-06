/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
// import useSound from 'use-sound'

function Sound({ url, visible }) {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(5)
    sound.current.setRolloffFactor(1)
    sound.current.setVolume(1)
    sound.current.setLoop(true)
    if (visible) {
      sound.current.play()
    }
    else {
      sound.current.stop()
    }
    camera.add(listener)
    return () => camera.remove(listener)
  }, [visible])

  return <positionalAudio ref={sound} args={[listener]} />
}

export default Sound
