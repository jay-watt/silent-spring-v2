/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function Info({ data }) {
  let birdName = ''
  let statusStr
  let statusDesc

  switch (data.Status) {
    case 1:
      statusStr = "Not threatened"
      break
    case 2:
      statusStr = "At risk of extinction"
      break
    case 3:
      statusStr = "High risk of extinction in the short-medium term"
      break
    case 4:
      statusStr = "Immediate high risk of extinction"
      break
    case 5:
      statusStr = "Extinct"
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
        {data.Media_Notes != '' && <p className="mediaNotes">
          {data.Media_Notes}
        </p>}
        <p className="status">
          {statusStr}
        </p>
      </div>
    </Html>
  )
}

export default Info
