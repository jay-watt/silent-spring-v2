/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { a, useSpring, config } from '@react-spring/three'

import Sound from './Sound'
import Info from './Info'

function Bird({ sceneRadius, position, data }) {
  const bird = useRef(null)
  const { camera } = useThree()

  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`
  const volAdjust =
    data.Status === 5 ? data.Sound_Level - 4 : (data.Sound_Level - 4) * 2

  const maxDist = sceneRadius / 4
  const minDist = maxDist / 3
  const size = sceneRadius / 100

  const [selected, setSelected] = useState(0)
  const [visible, setVisible] = useState({ bool: 1, phase: 5 })

  // conditionally render animation and info
  useFrame(() => {
    const dist = camera.position.distanceTo(bird.current.position)
    if (selected && (dist > maxDist || dist < minDist)) {
      setSelected(0)
    }
    if (dist < maxDist && dist > minDist && visible.bool && !selected) {
      setSelected(1)
    }
  })

  // handle space bar to fast forward phase
  useEffect(() => {
    const handleRemove = (event) => {
      if (event.key === ' ') {
        setVisible({ ...visible, phase: visible.phase - 1 })
        if (visible.bool && data.Status === visible.phase) {
          setVisible({
            ...visible,
            bool: 0,
          })
          setSelected(0)
        }
      }
    }
    document.addEventListener('keydown', handleRemove)
    if (visible.phase === 1) {
      return () => {
        document.removeEventListener('keydown', handleRemove)
      }
    }
  }, [visible.phase])
  // TODO make text popup fade out
  // animation setup
  const { selectedFade } = useSpring({
    selectedFade: selected,
    config: { ...config.slow, duration: 1000 },
  })
  const opacity = selectedFade.to([0, 1], [1, 0.3])

  const { visibleFade } = useSpring({
    visibleFade: visible.bool,
    config: { ...config.slow, duration: 2000 },
  })
  const scale = visibleFade.to([1, 0], [1.0, 0.0])

  return (
    <a.mesh ref={bird} position={position} scale={scale}>
      <boxGeometry args={[size, size, size]} />
      <a.meshStandardMaterial
        color={'#0071bc'}
        transparent={true}
        opacity={opacity}
      />
      <Sound url={audioUrl} visible={visible.bool} volAdjust={volAdjust} />
      {/* Not using && because when false, returns a non-null value */}
      {selected && visible.bool ? <Info data={data} /> : null}
    </a.mesh>
  )
}

export default Bird
