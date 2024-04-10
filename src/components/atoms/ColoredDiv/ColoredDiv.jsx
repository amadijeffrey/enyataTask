import React from 'react'
import "./ColoredDiv.scss"

const ColoredDiv = ({width, height, backgroundColor}) => {
   return (
    <div className='coloredDiv' style={{height:height, width:width, backgroundColor:backgroundColor}} />
   )
}

export default ColoredDiv