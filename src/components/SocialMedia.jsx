import React from 'react';
import { BsTwitter, BsInstagram,BsYoutube} from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
     <div>
       <a href={"https://twitter.com/CodeWithAbdur"} target="_blank">
        <BsTwitter /></a>
     </div>
     <div>
       <a href={"https://www.facebook.com/profile.php?id=100064823755797"} target="_blank">
        <FaFacebookF /></a>
     </div>
    <div>
       <a href={"https://www.instagram.com/codewithabdur/"} target="_blank">
        <BsInstagram /></a>
     </div>
    <div>
       <a href={"https://www.youtube.com/c/lucygamer01"} target="_blank">
        <BsYoutube /></a>
     </div>
     </div>
  )
}

export default SocialMedia