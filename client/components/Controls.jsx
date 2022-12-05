import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Controls() {

  const { camera, gl } = useThree()
  const controls = useRef()
  useFrame(() => controls.current.update())
  return (
    <OrbitControls
      ref={controls}
      // target={[0, 0, 0]}
      target={controls.target}
      enableDamping
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
