/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'

import Sound from './Sound'
import Banner from './Banner'

function Bird(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const bird = useRef()

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const audioUrl = `./server/public/audio/${props.data.Sound_Id}.mp3`

  return (
    <mesh
      ref={bird}
      position={props.position}
      scale={hovered ? 1.1 : 1}
      onClick={clicked ? () => click(false) : () => click(true)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
      <Sound url={audioUrl} />
      {clicked && <Banner data={props.data} />}
    </mesh>
  )
}

export default Bird
