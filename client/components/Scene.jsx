/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import DataObj from './DataObj'
import Controls from './Controls'

function CameraReset({ isActive, size }) {
  const { camera } = useThree()

  useEffect(() => {
    if (isActive) {
      camera.position.set(0, 0, size * 1.5)
    }
  }, [isActive, , size])

  return null
}

function Scene({ data, isActive }) {
  const size = 100

  const randomCoords = () => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = Math.cbrt(Math.random()) * size*0.85;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    return [x, y, z];
  };

  return (
    <div className="frameInner scene-fade-in">
      <Canvas camera={{ position: [0, 0, size*1.5] }}>
        <CameraReset isActive={isActive} size={size} />
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
        {data.map((item) => {
          return (
            <DataObj
              key={item.id}
              sceneRadius={size}
              position={randomCoords()}
              data={item}
              isActive={isActive}
            />
          )
        })}
        <Controls isActive={isActive} />
      </Canvas>
    </div>
  )
}
export default Scene
