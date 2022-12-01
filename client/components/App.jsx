/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
} from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function App() {
  extend({ OrbitControls })

  const Controls = () => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return (
      <orbitControls
        ref={ref}
        target={[0, 0, 0]}
        enableDamping
        args={[camera, gl.domElement]}
      />
    )
  }

  function Sound({ url }) {
    const sound = useRef()
    const { camera } = useThree()
    const [listener] = useState(() => new THREE.AudioListener())
    const buffer = useLoader(THREE.AudioLoader, url)

    useEffect(() => {
      sound.current.setBuffer(buffer)
      sound.current.setRefDistance(1)
      sound.current.setLoop(true)
      sound.current.play()
      camera.add(listener)
      return () => camera.remove(listener)
    }, [])
    return <positionalAudio ref={sound} args={[listener]} />
  }

  function handleClick(event) {
    event.preventDefault()
    const audioCtx = new AudioContext()
    audioCtx.resume()
  }

  return (
    <>
      <button onClick={handleClick}>PRESS ME</button>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <mesh position={[20, 0, 0]}>
            <boxBufferGeometry attach="geometry" />
            <meshBasicMaterial attach="material" color="blue" />
            <Sound url="./server/public/audio/1.mp3" />
          </mesh>
        </Suspense>

        <Suspense fallback={null}>
          <mesh position={[-20, 0, 0]}>
            <boxBufferGeometry attach="geometry" />
            <meshBasicMaterial attach="material" color="hotpink" />
            <Sound url="./server/public/audio/2.mp3" />
          </mesh>
        </Suspense>

        <Controls />
      </Canvas>
    </>
  )
}

export default App
