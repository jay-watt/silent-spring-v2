/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

import Sound from './Sound'
import Info from './Info'
// import { useDispatch, useSelector } from 'react-redux'
// import { changeControlSpeed, selectControlSpeed } from '../controlSpeedSlice'

function Bird({ position, data }) {
  const bird = useRef()
  const { camera } = useThree()

  // const dispatch = useDispatch()

  const minCamDist = 10
  const maxCamDist = 20

  // const increaseControlSpeed = {
  //   movementSpeed: 20,
  //   lookSpeed: 0.05
  // }

  // const decreaseControlSpeed = {
  //   movementSpeed: 5,
  //   lookSpeed: 0.01
  // }

  // const [speed, setSpeed] = useState({ increaseControlSpeed })
  // useEffect(() => {
  //   const initialCamPos = camera.position
  //   const initialBirdPos = bird.current.position
  //   const initialDist = initialCamPos.distanceTo(initialBirdPos)
  //   setDist(initialDist)
  // }, [])

  // const [hover, setHover] = useState(false)
  // const [click, setClick] = useState(false)
  const [camDist, setDist] = useState(0)

  // function handleClick() {
  //   const currentCamPos = camera.position
  //   const currentBirdPos = bird.current.position
  //   const currentDist = currentCamPos.distanceTo(currentBirdPos)
  //   setClick(!click)
  //   setDist(currentDist)
  // }

  useFrame(() => {
    const currentCamPos = camera.position
    const currentBirdPos = bird.current.position
    const currentDist = currentCamPos.distanceTo(currentBirdPos)
    setDist(currentDist)
    // if (currentDist < maxCamDist) {
    //   dispatch(changeControlSpeed(decreaseControlSpeed))
    //   setSpeed(decreaseControlSpeed)
    // }
  }
  )

  const audioUrl = `./server/public/audio/${data.Sound_Id}.mp3`

  return (
    <mesh
      ref={bird}
      position={position}
    // scale={hover ? 1.1 : 1}
    // onClick={clicked ? () => click(false) : () => click(true)}
    // onClick={handleClick}
    // onPointerOver={() => setHover(true)}
    // onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={hover ? 'hotpink' : 'purple'} /> */}
      <meshStandardMaterial color={'hotpink'} />
      <Sound url={audioUrl} />
      {camDist < maxCamDist && camDist > minCamDist && <Info data={data} />}
    </mesh>
  )
}

export default Bird
