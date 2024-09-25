/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Info({ data }) {
  let birdName = ''
  let statusStr
  let statusDesc

  switch (data.Status) {
    case 1:
      statusStr = "not threatened"
      break
    case 2:
      statusStr = "at risk of extinction"
      break
    case 3:
      statusStr = "high risk of extinction in the short-medium term"
      break
    case 4:
      statusStr = "immediate high risk of extinction"
      break
    case 5:
      statusStr = "extinct"
      break
  }

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
          {birdName}
        </p>
        <p className="status">
          {statusStr}
        </p>
      </div>
    </Html>
  )
}

export default Info
