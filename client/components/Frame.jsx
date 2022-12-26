import React, { useEffect, useState } from 'react'

import Scene from './Scene'
import { fetchBirds } from '../api'

export default function Frame() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds()
      .then((birds) => setData(birds))
      .catch((err) => err.message)
  }, [])

  return (
    data.length > 0 && (
      <div className="frameContainer">
        <div className="corner-1"></div>
        <div className="frameHeader">
          <p>
            <b>SPACE</b> fast forward, <b>R</b> return to homepage
            <br />
            <b>MOVE CURSOR</b> look around, <b>LEFT CLICK</b> move forward,{' '}
            <b>RIGHT CLICK</b> move backward
          </p>
        </div>
        <div className="corner-2"></div>
        <div className="frameLeft"></div>
        <div className="frameInner">
          <Scene data={data} />
        </div>
        <div className="frameRight"></div>
        <div className="corner-3"></div>
        <div className="frameFooter"></div>
        <div className="corner-4"></div>
      </div>
    )
  )
}
