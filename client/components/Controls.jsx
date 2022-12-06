import React, { useRef } from 'react'
import { useThree, useFrame, extend } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'
// import { selectControlSpeed } from '../controlSpeedSlice'
// import { useSelector } from 'react-redux'

function Controls() {
  extend({ FirstPersonControls })
  const { camera, gl } = useThree()
  const controls = useRef()
  // const speed = useSelector(selectControlSpeed)

  useFrame(({ clock }) => {
    const delta = clock.getDelta()
    controls.current.update(delta)
  })

  return (
    <FirstPersonControls
      ref={controls}
      activeLook={true}
      // movementSpeed={speed.movementSpeed}
      // lookSpeed={speed.lookSpeed}
      movementSpeed={20}
      lookSpeed={0.05}
      noFly={true}
      target={controls.target}
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
