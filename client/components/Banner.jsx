/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import fonts from './fonts'
import { useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function Banner({ text }) {
  const ref = useRef()


  return (
    <Html className="info" distanceFactor={2} position={[0, 2, 0]}>
      {text}
    </Html>
  )
}

export default Banner
