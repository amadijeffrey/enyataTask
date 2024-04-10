import React from 'react'
import profileImage from '../../../assets/account.svg'
import './ProfileImg.scss'

const ProfileImage = () => {
    return <img className='acct-img' src={profileImage} alt='account image' />
}

export default ProfileImage