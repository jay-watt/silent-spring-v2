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



  return (
    <FirstPersonControls
      ref={controls}
      activeLook={true}
      movementSpeed={20}
      lookSpeed={0.05}
      noFly={true}
      // target={controls.target}
      // enableDamping
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
