/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'

import Sound from './Sound'
import Banner from './Banner'

function Bird({ position, data }) {
  const bird = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [remove, setRemove] = useState(false)

  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`

  useEffect(() => {
    const handleRemove = (event) => {
      console.log(event.key)
      if (event.key === ' ') {
        setRemove(!remove)
      }
    }
    document.addEventListener('keydown', handleRemove)

    return () => {
      document.removeEventListener('keydown', handleRemove)
    }
  })

  return (
    remove && (
      <mesh
        ref={bird}
        position={position}
        scale={hovered ? 1.1 : 1}
        onClick={clicked ? () => click(false) : () => click(true)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
        <Sound url={audioUrl} />
        {clicked && <Banner data={data} />}
      </mesh>
    )
  )
}

export default Bird
