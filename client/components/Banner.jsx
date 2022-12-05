/* eslint-disable react/no-unknown-property */
import React from 'react'
import fonts from './fonts'

function Banner({ data }) {
  const opts = {
    font: 'Philosopher',
    fontSize: 0.2,
    color: '#99ccff',
    maxWidth: 5,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    position: [1, -1, 1],
  }

  let text1 = ''

  Object.keys(data).map((propertyName) => {
    if (data[propertyName].length > 0) {
      text1 = text1 + `${propertyName}: ${data[propertyName]}\n`
    }
  })

  return (
    <text text={text1} {...opts} font={fonts[opts.font]} anchorX="center" />
  )
}

export default Banner
