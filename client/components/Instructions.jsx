import React from 'react'

export default function Instructions() {
  return (
    <>
      <div className="frameHeader">
        <div className="instructionsItem">
          <p>
            <b>MOVE CURSOR</b> look around
          </p>
        </div>
        <div className="instructionsItem">
          <p>
            <b>LEFT CLICK</b> move forward
          </p>
        </div>
        <div className="instructionsItem">
          <p>
            <b>RIGHT CLICK</b> move backward
          </p>
        </div>
      </div>

      <div className="frameFooter">
        <div className="instructionsItem">
          <p>
            <b>SPACE</b> fast forward
          </p>
        </div>
        <div className="instructionsItem">
          <p>
            <b>ESC</b> return to homepage
          </p>
        </div>
      </div>
    </>
  )
}
