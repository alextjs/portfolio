import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/alexturcan_/" target="_blank"><BsInstagram/></a>
      <a href="https://www.facebook.com/profile.php?id=100005877218705" target="_blank" ><FaFacebook/></a>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials