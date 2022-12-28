/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Html } from '@react-three/drei'

function ObjInfo({ data, scale }) {
  let birdName = ''

  function pickName() {
    if (data.Te_Reo === '') {
      return (birdName = data.English_Name)
    } else {
      return (birdName = data.Te_Reo)
    }
  }
  pickName()

  // TODO put media notes in extra popout

  return (
    <Html distanceFactor={2} position={[0, 0, 0]} scale={scale}>
      <div className="info">
        <p2>{birdName}</p2>
        {data.Media_Notes && (
          <p2>
            <br />
            {data.Media_Notes}
          </p2>
        )}
      </div>
    </Html>
  )
}

export default ObjInfo
