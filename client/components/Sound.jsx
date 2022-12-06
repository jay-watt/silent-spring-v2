/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
// import useSound from 'use-sound'

function Sound({ url }) {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(4)
    sound.current.setRolloffFactor(2)
    sound.current.setVolume(3)
    sound.current.setLoop(true)
    sound.current.play(1)
    camera.add(listener)
    return () => camera.remove(listener)
  }, [])

  return <positionalAudio ref={sound} args={[listener]} />
}

export default Sound
