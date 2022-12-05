/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'troika-three-text'
import { extend, useFrame, useThree } from '@react-three/fiber'
import Sound from './Sound'
import Banner from './Banner'


function BoxTest(props) {
  extend({ Text })
  // This reference gives us direct access to the THREE.Mesh object
  const box = useRef()

  const { camera } = useThree()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  // useFrame(() => box.current.update())

  const audioUrl = `./server/public/audio/${props.data.ML_Catalog_Number}.mp3`

  return (
    <mesh
      ref={box}
      position={props.position}
      scale={hovered ? 1.5 : 1}
      onClick={clicked ? () => click(false) : () => click(true)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    // lookAt={camera.position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
      <Sound url={audioUrl} />

      {clicked && <Banner data={props.data} />}
    </mesh>
  )
}

export default BoxTest
