/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import Bird from './Bird'
import Controls from './Controls'
import { fetchBirds } from '../api'

function Birds() {
  const sceneRadius = 200
  const maxPosition = sceneRadius * 0.75
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
    const x = getRandomInt(maxPosition)
    const y = getRandomInt(maxPosition)
    const z = getRandomInt(maxPosition)
    return [x, y, z]
  }
  // TODO change sphere wireframe from tri to quad
  return (
    <>
      {data.length > 0 ? (
        <Canvas camera={{ position: [0, 0, sceneRadius * 1.5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[sceneRadius, 30, 16]} />
            <meshStandardMaterial wireframe={true} color={'#e4e2e0'} />
          </mesh>
          {data.map((data, idx) => {
            if (idx < 5) {
              return (
                <Bird key={data.id} position={getRandomCoords()} data={data} />
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
