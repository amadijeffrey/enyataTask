import React from 'react'
import './Image.scss'

const Image = ({imageSrc}) => {
    return (<img src={imageSrc} alt="picture"  className='picture'/>)
}

export default Image