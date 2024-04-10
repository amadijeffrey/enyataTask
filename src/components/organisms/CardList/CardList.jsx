import React from 'react'
import "./CardList.scss"
import Card from '../../molecules/Card/Card'


const CardList = ({items}) => {
   return (
    <div className='cardList'>
       {
        items.length > 0 ? items.map((item,idx) => {
            const {title, update, total, backgroundColor} = item
            return <Card key={idx} title={title} divBackgroundColor={backgroundColor} update={update} total={total}/>
        }): null
       }
    </div>
   )
}

export  default CardList