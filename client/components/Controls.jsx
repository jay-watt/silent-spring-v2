import React, { useRef, useEffect } from 'react'
import { useThree, useFrame, extend } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'

function Controls({ isActive}) {
  extend({ FirstPersonControls })
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (isActive && controls.current) {
      controls.current.lookAt(0, 0, 0)
    }
  }, [isActive])

  useFrame(({ clock }) => {
    const delta = clock.getDelta()
    controls.current.update(delta)
  })

  return (
    <FirstPersonControls
      ref={controls}
      activeLook={true}
      movementSpeed={20}
      lookSpeed={0.05}
      target={controls.target}
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
