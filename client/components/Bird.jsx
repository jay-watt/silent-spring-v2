/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSpring } from "@react-spring/core"
import { a } from "@react-spring/three"

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data }) {
  const bird = useRef(null)
  const { camera } = useThree()
  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`

  const [click, setClick] = useState(false)
  const [camDist, setDist] = useState(0)
  const [active, setActive] = useState(0)

  const minCamDist = 5
  const maxCamDist = 30
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  })
  const scale = spring.to([0, 1], [1, 5])
  const rotation = spring.to([0, 1], [0, Math.PI])
  const color = spring.to([0, 1], ["hotpink", "hotpink"])

  useFrame(() => {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    setDist(currentDist)
    if ((currentDist > maxCamDist && active) || (currentDist < minCamDist && active)) {
      setClick(!click)
      setActive(0)
      setDist(currentDist)
    }
  })

  function handleClick() {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    if (currentDist < maxCamDist && currentDist > minCamDist) {
      setClick(!click)
      setActive(Number(!active))
      setDist(currentDist)
    }
  }


  return (
    <a.mesh
      ref={bird}
      position={position}
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}
      onClick={handleClick}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
      <Sound url={audioUrl} />
      {active && <Info data={data} />}
    </a.mesh>
  )
}

export default Bird
