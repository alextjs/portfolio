import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      <a href="https://facebook.com" target="_blank" ><FaFacebook/></a>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials