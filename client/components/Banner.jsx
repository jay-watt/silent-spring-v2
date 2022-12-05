/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Banner({ data }) {
  let text = ''

  Object.keys(data).map((propertyName) => {
    if (data[propertyName].length > 0) text = text + `${propertyName}: ${data[propertyName]}\n`
  })

  return (
    <Html className="info" distanceFactor={2} position={[0, 2, 0]}>
      {text}
    </Html>
  )
}

export default Banner
