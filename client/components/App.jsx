import React, { useState, useEffect } from 'react'

import Instructions from './Instructions'
import Scene from './Scene'
import Landing from './Landing'

import { fetchBirds } from '../api'

export default function App() {
  const [enterReq, setEnterReq] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds()
      .then((birds) => setData(birds))
      .catch((err) => err.message)
  }, [])

  useEffect(() => {
    const handleEnter = (event) => {
      if (event.keyCode === 13) {
        setEnterReq(true)
      }
    }
    document.addEventListener('keydown', handleEnter)

    return () => {
      document.removeEventListener('keydown', handleEnter)
    }
  }, [])

  return (
    <div className="frameContainer">
      {enterReq ? (
        data.length && (
          <>
            <Scene data={data} />
            <Instructions />
          </>
        )
      ) : (
        <>
          <Landing />
          <div className="frameHeader"></div>
          <div className="frameFooter"></div>
        </>
      )}
      <div className="frameLeft"></div>
      <div className="frameRight"></div>
      <div className="corner-1"></div>
      <div className="corner-2"></div>
      <div className="corner-3"></div>
      <div className="corner-4"></div>
    </div>
  )
}
