/* eslint-disable react/no-unknown-property */
import React from 'react'
import fonts from './fonts'

function Banner({ text }) {
  const opts = {
    font: 'Philosopher',
    fontSize: 12,
    color: '#99ccff',
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
  }
  return (
    <text
      text={text}
      {...opts}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
    >
      <meshPhongMaterial attach="material" color="hotpink" />
    </text>
  )
}

export default Banner
