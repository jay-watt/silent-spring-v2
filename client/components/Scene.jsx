/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Canvas } from '@react-three/fiber'

import DataObj from './DataObj'
import Controls from './Controls'

function Scene({ data }) {
  const size = 100

  const randomInt = (max) => Math.floor((Math.random() - 0.5) * max + 1)
  const randomCoords = () => [randomInt(size), randomInt(size), randomInt(size)]

  // TODO change sphere wireframe from tri to quad
  // TODO move coord helpers into seperate helper module

  return (
    <div className="frameInner">
      <Canvas camera={{ position: [0, 0, size * 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 10]} intensity={1} />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[size, 100, 50]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.1}
            wireframe={true}
            color={'#0071bc'}
          />
        </mesh>
        {data.map((data, idx) => {
          return (
            <DataObj
              key={data.id}
              sceneRadius={size}
              position={randomCoords()}
              data={data}
            />
          )
        })}
        <Controls />
      </Canvas>
    </div>
  )
}
export default Scene
