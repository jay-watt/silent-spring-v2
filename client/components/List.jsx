import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { fetchBirds } from '../api'


import BoxTest from './BoxTest'

function List() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds().then((birds) => {
      setData(() => birds)
    }).catch((err => err.message))
  }, [])

  // useEffect(() => {
  //   fetchBirds()
  // }, [])
  function getRandomInt() {
    return Math.floor(Math.random() * 15 + 1)
  }


  const x = getRandomInt()
  const y = getRandomInt()
  const z = getRandomInt()


  return (<>
    {data.length > 0 ? (<main className="flex items-center justify-center h-screen bg-violet-300	">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {data.map((data) => {
          return <BoxTest key={data.id} position={[{ x }, { y }, { z }]} data={data} />
        })}
        {/*         
        <Box position={[1.2, 0, 0]} />
        <Box position={[3.6, 2.4, 0]} />
        <Box position={[5.9, 6.0, 1.0]} /> */}
        <OrbitControls />
      </Canvas>
    </main>)
      :
      (<p>test</p>)}

  </>

  )
}
export default List