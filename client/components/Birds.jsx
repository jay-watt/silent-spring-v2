/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Bird from './Bird'
import Controls from './Controls'
import { fetchBirds } from '../api'

function Birds() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds()
      .then((birds) => {
        setData(() => birds)
      })
      .catch((err) => err.message)
  }, [])

  function getRandomInt(max) {
    return Math.floor((Math.random() - 0.5) * max + 1)
  }

  function getRandomCoords() {
    const x = getRandomInt(0)
    const y = getRandomInt(0)
    const z = getRandomInt(0)
    return [x, y, z]
  }

  function handleOnClick(e) {
    console.log('X: ', e.clientX)
    console.log('Y: ', e.clientY)
  }

  return (
    <>
      {data.length > 0 ? (
        <Suspense fallback={null}>
          <Canvas onClick={handleOnClick} className="canvas" camera={{ position: [0, 0, 20], aspect: window.innerWidth / window.innerHeight }} >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {data.map((data, idx) => {
              if (idx < 5) {
                return (
                  <Bird
                    key={data.id}
                    position={getRandomCoords()}
                    data={data}
                  />

                )
              }
            })}
            <Controls />
          </Canvas>
        </Suspense>
      ) : (
        <p>test</p>
      )}
    </>
  )
}
export default Birds
