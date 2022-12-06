import React, { useRef } from 'react'
import { useThree, useFrame, extend } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'

function Controls() {
  extend({ FirstPersonControls })
  const { camera, gl } = useThree()
  const controls = useRef()

  useFrame(({ clock }) => {
    const delta = clock.getDelta()
    controls.current.update(delta)
  })

  return (
    <FirstPersonControls
      ref={controls}
      activeLook={true}
      movementSpeed={5}
      lookSpeed={0.01}
      constrainVertical={true}
      verticalMax={Math.PI - 0.5}
      verticalMin={0.5}
      target={controls.target}
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
