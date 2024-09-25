import React from 'react'

export default function Instructions() {
  return (
    <>
      <div className="frameHeader">
        <div className="instructionsItem">
          <b>MOUSE</b> look around
        </div>
        {/* <div className="instructionsItem">
          <b>LEFT CLICK</b> move forward
        </div> */}
        {/* <div className="instructionsItem">
          <b>RIGHT CLICK</b> move backward
        </div> */}
        <div className="instructionsItem">
          <b>WASD/ARROW KEYS</b> move around
        </div>
      </div>

      <div className="frameFooter">
        <div className="instructionsItem">
          <b>SPACE</b> jump forward in time
        </div>
        <div className="instructionsItem">
          <b>ESC</b> return to homepage
        </div>
      </div>
    </>
  )
}
