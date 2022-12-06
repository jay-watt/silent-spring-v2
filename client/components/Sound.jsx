/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useThree, useLoader } from '@react-three/fiber'

function Sound({ url, visible, vol }) {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setRolloffFactor(1)
    sound.current.setVolume(vol)
    sound.current.setLoop(true)
    if (visible) {
      fade(true, sound.current)
    }
    else {
      fade(false, sound.current)
    }
    camera.add(listener)
    return () => camera.remove(listener)
  }, [visible])

  function fade(inBool, audio) {
    if (inBool) audio.play()
    let counter = inBool ? 0 : 10
    const steps = 10
    const fadeTime = 5000
    const interval = fadeTime / steps
    const intervalId = setInterval(function () {
      let fadeVol = (vol / steps) * counter
      audio.setVolume(fadeVol)
      inBool ? counter++ : counter--
      if (counter === (inBool ? steps : 0)) {
        clearInterval(intervalId)
        if (!inBool) audio.stop()
      }
    }, interval)
  }


  return <positionalAudio ref={sound} args={[listener]} />
}

export default Sound
