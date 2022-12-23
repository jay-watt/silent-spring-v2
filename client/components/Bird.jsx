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
    visible: 1,
    phase: 5,
  })

  // conditionally render animation and info
  useFrame(() => {
    const dist = camera.position.distanceTo(bird.current.position)
    if (birdState.active && (dist > maxDist || dist < minDist)) {
      setBirdState({
        ...birdState,
        active: 0,
        currentDist: dist,
      })
    }
    if (
      dist < maxDist &&
      dist > minDist &&
      birdState.visible &&
      !birdState.active
    ) {
      setBirdState({
        ...birdState,
        active: 1,
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
            visible: 0,
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
  const opacity = spring.to([0, 1], [1, 0.3])

  const { fade } = useSpring({ fade: birdState.visible })
  const scale = fade.to([1, 0], [1.0, 0.05])

  return (
    <a.mesh ref={bird} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial
        color={'blue'}
        transparent={true}
        opacity={opacity}
      />
      <Sound url={audioUrl} visible={birdState.visible} volAdjust={volAdjust} />
      {/* Not using && because when false, returns a non-null value */}
      {birdState.active && birdState.visible ? <Info data={birdData} /> : null}
    </a.mesh>
  )
}

export default Bird
