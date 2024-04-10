import React from 'react'
import './SideBarTab.scss'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import ColoredDiv from '../../atoms/ColoredDiv/ColoredDiv'
import Icon from '../../atoms/Icon/Icon'

const SideBarTab = ({divBackgroundColor, title, icon=false, src}) => {
    return <div className='sideBarTab'>
        {icon ? <Icon src={src} altText={'overview icon'}/> :
     <ColoredDiv width={16} height={16}  backgroundColor={divBackgroundColor}/> }
     <Paragraph textProps={"white-16-600"}>{title}</Paragraph>
    </div>
}

export default SideBarTab