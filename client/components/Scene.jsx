/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Canvas } from '@react-three/fiber'

import DataObj from './DataObj'
import Controls from './Controls'

function Scene({ data }) {
  const size = 100

  // object position helper functions
  const randomInt = (max) => Math.floor((Math.random() - 0.5) * max + 1)
  const randomCoords = () => [randomInt(size), randomInt(size), randomInt(size)]

  return (
    <div className="frameInner">
      <Canvas camera={{ position: [0, 0, size * 1.8] }}>
        <ambientLight intensity={1.0} />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[size, 100, 50]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.2}
            wireframe={true}
            color={'#0071bc'}
          />
        </mesh>
        {data.map((data, idx) => {
          if (idx < 10) {
            return (
              <DataObj
                key={data.id}
                sceneRadius={size}
                position={randomCoords()}
                data={data}
              />
            )
          }
        })}
        <Controls />
      </Canvas>
    </div>
  )
}
export default Scene
