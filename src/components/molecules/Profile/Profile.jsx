import React from 'react'
import ProfileImage from '../../atoms/ProfileImg/ProfileImg'
import './Profile.scss'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Profile = () => {
    return <div className='profile'>
     <ProfileImage />
     <Paragraph textProps={"#303b54-15-400"}>John Doe</Paragraph>
    </div>
}

export default Profile