/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data }) {
  const bird = useRef()
  const status = data.Status
  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`

  const [click, setClick] = useState(false)
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState(5)

  function handleClick() {
    if (visible) {
      setClick(true)
    }
  }

  useEffect(() => {
    const handleRemove = (event) => {
      if (event.key === ' ') {
        const newPhase = phase - 1
        setPhase(newPhase)
        if (visible && status === phase) {
          setClick(false)
          setVisible(false)
        }
      }
    }
    document.addEventListener('keydown', handleRemove)
    return () => {
      if (phase === 0) {
        document.removeEventListener('keydown', handleRemove)
      }
    }
  }, [phase])

  return (
    (
      <mesh
        ref={bird}
        position={position}
        scale={1}
        onClick={handleClick}
        visible={visible ? true : false}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
        <Sound url={audioUrl} visible={visible} />
        {(click && visible) && <Info data={data} />}
      </mesh >
    )
  )
}

export default Bird
