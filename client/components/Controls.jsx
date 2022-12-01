
import React, { useRef } from 'react'
import { useThree, useFrame, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


function Controls() {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <OrbitControls ref={ref} target={[0, 0, 0]} enableDamping args={[camera, gl.domElement]} />
}

export default Controls