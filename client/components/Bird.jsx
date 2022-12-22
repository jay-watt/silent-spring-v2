/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three'

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data: birdData }) {
  const bird = useRef(null)
  const { camera } = useThree()
  const audioUrl = `./server/public/audio/${birdData.Sound_Id}.mp3`
  const volAdjust =
    birdData.Status === 5
      ? birdData.Sound_Level - 4
      : (birdData.Sound_Level - 4) * 2
  const minDist = 8
  const maxDist = 22

  const [birdState, setBirdState] = useState({
    currentDist: 0,
    active: 0,
    selected: false,
    visible: true,
    phase: 5,
  })

  // conditionally render animation and info
  useFrame(() => {
    const dist = camera.position.distanceTo(bird.current.position)
    if (birdState.selected && (dist > maxDist || dist < minDist)) {
      setBirdState({
        ...birdState,
        active: 0,
        selected: false,
        currentDist: dist,
      })
    }
    if (
      dist < maxDist &&
      dist > minDist &&
      birdState.visible &&
      !birdState.selected
    ) {
      setBirdState({
        ...birdState,
        active: Number(!birdState.active),
        selected: true,
        camDist: dist,
      })
    }
  })

  // handle space bar to fast forward phase
  useEffect(() => {
    const handleRemove = (event) => {
      if (event.key === ' ') {
        setBirdState({ ...birdState, phase: birdState.phase - 1 })
        if (birdState.visible && birdData.Status === birdState.phase) {
          setBirdState({
            ...birdState,
            active: 0,
            selected: false,
            visible: false,
          })
        }
      }
    }
    document.addEventListener('keydown', handleRemove)
    if (birdState.phase === 1) {
      return () => {
        document.removeEventListener('keydown', handleRemove)
      }
    }
  }, [birdState.phase])

  // animation setup
  const { spring } = useSpring({ spring: birdState.active })
  const rotation = spring.to([0, 1], [0, Math.PI])

  const { fade } = useSpring({ fade: birdState.visible })
  const scale = fade.to([true, false], [1, 0.05])

  return (
    <a.mesh ref={bird} position={position} rotation-y={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#59981A" />
      <Sound url={audioUrl} visible={birdState.visible} volAdjust={volAdjust} />
      {/* Not using && because when false, returns a non-null value */}
      {birdState.selected && birdState.visible ? (
        <Info data={birdData} />
      ) : null}
    </a.mesh>
  )
}

export default Bird
