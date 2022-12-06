/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three'

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data }) {
  const bird = useRef(null)
  const { camera } = useThree()
  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`

  const [birdState, setBirdState] = useState({
    click: false,
    camDist: 0,
    active: 0,
  })

  const minCamDist = 10
  const maxCamDist = 40

  const { spring } = useSpring({
    spring: birdState.active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })
  const scale = spring.to([0, 1], [1, 5])
  const rotation = spring.to([0, 1], [0, Math.PI])

  useFrame(() => {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    if (
      (currentDist > maxCamDist && birdState.active) ||
      (currentDist < minCamDist && birdState.active)
    ) {
      setBirdState({
        ...birdState,
        click: !birdState.click,
        active: 0,
        camDist: currentDist,
      })
    } else {
      setBirdState({ ...birdState, camDist: currentDist })
    }
  })

  function handleClick() {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    if (currentDist < maxCamDist && currentDist > minCamDist) {
      setBirdState({
        ...birdState, click: !birdState.click,
        active: Number(!birdState.active),
        camDist: currentDist,
      })
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
      <meshStandardMaterial />
      <Sound url={audioUrl} />
      {/* Not using && because when false, returns a non-null value */}
      {birdState.active ? <Info data={data} /> : null}
    </a.mesh>
  )
}

export default Bird
