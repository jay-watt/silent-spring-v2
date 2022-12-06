/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import Bird from './Bird'
import Controls from './Controls'
import { fetchBirds } from '../api'

function Birds() {
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
    const x = getRandomInt(200)
    const y = getRandomInt(100)
    const z = getRandomInt(100)
    return [x, y, z]
  }

  return (
    <>
      {data.length > 0 ? (
        <Canvas camera={{ position: [0, 0, 200] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {data.map((data) => {
            return (
              <Bird key={data.id} position={getRandomCoords()} data={data} />
            )
          })}
          <Controls />
        </Canvas>
      ) : (
        <p>test</p>
      )}
    </>
  )
}
export default Birds
