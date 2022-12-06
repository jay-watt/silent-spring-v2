/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Info({ data }) {
  const text = `${data.Sound_Id}`

  return (
    <Html className="info" distanceFactor={2} position={[0, 2, 0]}>
      {text}
    </Html>
  )
}

export default Info
