import React, { useRef } from 'react'
import { useThree, useFrame, extend } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'
// import { OrbitControls } from '@react-three/drei'

function Controls() {
  extend({ FirstPersonControls })
  const { camera, gl } = useThree()
  const controls = useRef()
  // gl.setSize(window.innerWidth, window.innerHeight)

  useFrame(({ clock }) => {
    const delta = clock.getDelta()
    controls.current.update(delta)
  })

  // useFrame(() => {
  //   controls.current.update()
  // })

  controls.movementSpeed = 700
  controls.lookSpeed = 0.05
  // controls.noFly = true
  // controls.lookVertical = false;


  return (
    <FirstPersonControls
      ref={controls}
      // target={controls.target}
      // enableDamping
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
