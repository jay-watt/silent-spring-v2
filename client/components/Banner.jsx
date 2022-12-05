/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import fonts from './fonts'
// import { useThree } from '@react-three/fiber'
// import * as THREE from 'three'


function Banner({ data }) {
  const ref = useRef()

  const opts = {
    font: 'Philosopher',
    fontSize: 0.2,
    color: '#99ccff',
    position: [0, 2, 0.5],
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    anchorX: 'center',

  }

  let text1 = ''

  Object.keys(data).map((propertyName) => {
    if (data[propertyName].length > 0) {
      text1 = text1 + `${propertyName}: ${data[propertyName]}\n`
    }
  })

  return (

    <text
      ref={ref}
      text={text1}
      {...opts}
      localRotation={[100, 0, 0]}
      font={fonts[opts.font]}
    />

  )
}

export default Banner
