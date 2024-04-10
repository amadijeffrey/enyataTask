import React from 'react'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import ColoredDiv from '../../atoms/ColoredDiv/ColoredDiv'
import "./Card.scss"

const Card = ({title, divBackgroundColor, update, total}) => {
   return (
    <div className='card'>
     <div className='topDiv'>
        <Paragraph textProps={'#303b54-16-700'}>{title}</Paragraph>
        <ColoredDiv height={26} width={26} backgroundColor={divBackgroundColor}/>
     </div>
     <div>
        <Paragraph textProps={'#303b54-16-700'}>{total}</Paragraph>
        <Paragraph textProps={'#00992b-9-400'}>{`${update} more than yesterday`}</Paragraph>
     </div>
    </div>
   )
}

export  default Card