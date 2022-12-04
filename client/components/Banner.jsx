/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import fonts from './fonts'
// import { useThree } from '@react-three/fiber'
// import * as THREE from 'three'

function Banner({ text }) {
  const ref = useRef()

  // const { camera } = useThree()
  // let rotation = camera.rotation
  // const startingVec = new THREE.Vector3();
  // const startingRotate = camera.getWorldDirection(startingVec)
  // const startingRotation = [startingRotate.x, startingRotate.y, startingRotate.z]

  // const [rotation, setRotation] = useState(startingRotation)
  // function getNewRotation() {
  //   const vec = new THREE.Vector3();
  //   const rotate = camera.getWorldDirection(vec)
  //   return [rotate.x, rotate.y, rotate.z]
  // }
  // useEffect(() => {
  //   setRotation(newRotation)
  //   console.log('setting rotation')
  // }, [camera.projectionMatrix])


  const opts = {
    font: 'Philosopher',
    fontSize: 1,
    color: '#99ccff',
    position: [0, 2, 0.5],
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    anchorX: 'center',
    // rotateX: rotation[0],
    // rotateY: rotation[1],
    // rotateZ: rotation[2]
  }
  return (
    <text
      ref={ref}
      text={text}
      {...opts}
      localRotation={[100, 0, 0]}
      font={fonts[opts.font]}
    />
  )
}

export default Banner
