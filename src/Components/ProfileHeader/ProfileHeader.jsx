import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import './style.css'
// assets 
import avater from '../../Assets/avater.png'

const ProfileHeader = () => {
    return (
        <div className='profileHeader_container'>
            <div className="profileHead_md">
              <img className='proImg' src={avater} alt="..." />
              <div className="profil_loginLink">
                <FaUserCircle className='pro_icon' />
                <Link className='login_link' to='/login' >Login/Register</Link>
              </div>
            </div>
        </div>
    )
}

export default ProfileHeader
