/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import Bird from './Bird'
import Controls from './Controls'
import { fetchBirds } from '../api'

function Birds() {
  const sceneRadius = 100
  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds()
      .then((birds) => setData(birds))
      .catch((err) => err.message)
  }, [])

  function getRandomInt(max) {
    return Math.floor((Math.random() - 0.5) * max + 1)
  }

  function getRandomCoords() {
    const x = getRandomInt(sceneRadius)
    const y = getRandomInt(sceneRadius)
    const z = getRandomInt(sceneRadius)
    return [x, y, z]
  }
  // TODO change sphere wireframe from tri to quad
  return (
    <>
      {data.length > 0 ? (
        <Canvas camera={{ position: [0, 0, sceneRadius * 2] }}>
          <ambientLight intensity={0.5} />
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[sceneRadius, 100, 50]} />
            <meshStandardMaterial
              transparent={true}
              opacity={0.1}
              wireframe={true}
              color={'#0071bc'}
            />
          </mesh>
          {data.map((data, idx) => {
            if (idx < 10) {
              return (
                <Bird
                  key={data.id}
                  sceneRadius={sceneRadius}
                  position={getRandomCoords()}
                  data={data}
                />
              )
            }
          })}
          <Controls />
        </Canvas>
      ) : (
        <br />
      )}
    </>
  )
}
export default Birds
