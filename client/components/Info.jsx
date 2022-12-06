/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Info({ data }) {
  // const birdObject = Object.keys(data).map((propertyName) => {
  //   if (data[propertyName].length > 0) {
  //     return `${propertyName}: ${data[propertyName]}\n`
  //   }
  // })

  let birdName = ''

  function pickName() {
    if (data.Te_Reo === '') {
      return (birdName = data.English_Name)
    } else {
      return (birdName = data.Te_Reo)
    }
  }
  pickName()

  return (
    <Html className="info" distanceFactor={2} position={[0, 2, 0]}>
      <h3>{birdName}</h3>
      <p>{data.Media_Notes}</p>
      <p>{data.Sound_Credit}</p>
    </Html>
  )
}

export default Info
