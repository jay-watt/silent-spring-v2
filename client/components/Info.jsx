/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Info({ data }) {
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
    <Html distanceFactor={2} position={[0, 0, 0]}>
      <div className="info">
        <p>
          <b>{birdName}</b>
        </p>
        {data.Media_Notes && <p>{data.Media_Notes}</p>}
      </div>
    </Html>
  )
}

export default Info
