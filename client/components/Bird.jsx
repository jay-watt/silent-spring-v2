/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three'

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data }) {
  const bird = useRef(null)
  const { camera } = useThree()
  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`
  const minCamDist = 10
  const maxCamDist = 40

  const [birdState, setBirdState] = useState({
    click: false,
    camDist: 0,
    active: 0,
    visible: true,
    phase: 5
  })

  // distance from bird to camera
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

  // handle space bar to fast forward phase
  useEffect(() => {
    const handleRemove = (event) => {
      if (event.key === ' ') {
        setBirdState({ ...birdState, phase: birdState.phase - 1 })
        if (birdState.visible && data.status === birdState.phase) {
          setBirdState({ ...birdState, click: false, visible: false })
        }
      }
    }
    document.addEventListener('keydown', handleRemove)
    return () => {
      if (birdState.phase === 0) {
        document.removeEventListener('keydown', handleRemove)
      }
    }
  }, [birdState.phase])

  // show info if bird correct distance from camera
  function handleClick() {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    if (currentDist < maxCamDist && currentDist > minCamDist && birdState.visible) {
      setBirdState({
        ...birdState, click: !birdState.click,
        active: Number(!birdState.active),
        camDist: currentDist,
      })
    }
  }

  // animation setup
  const { spring } = useSpring({
    spring: birdState.active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })
  const scale = spring.to([0, 1], [1, 5])
  const rotation = spring.to([0, 1], [0, Math.PI])

  return (
    <a.mesh
      ref={bird}
      position={position}
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}
      onClick={handleClick}
      visible={birdState.visible ? true : false}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
      <Sound url={audioUrl} visible={birdState.visible} />
      {/* Not using && because when false, returns a non-null value */}
      {(birdState.click && birdState.visible) ? <Info data={data} /> : null}
    </a.mesh>
  )
}

export default Bird
