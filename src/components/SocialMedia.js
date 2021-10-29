import React from 'react';
import GITHUB from '../images/LOGO-github.png';
import TWITTER from '../images/LOGO-twitter.png';
import LINKEDIN from '../images/LOGO-linkedin.png';
import INSTAGRAM from '../images/LOGO-instagram.png';
import YOUTUBE from '../images/LOGO-youtube.svg';
import MAIL from '../images/LOGO-mail.png'

const SocialMedia = () => {

  const openLink = (opt) => {

  }

  const copyEmail = (e) => {
    navigator.clipboard.writeText("vins25165@gmail.com");
    alert("Email copied")
  }

  return (
  <div className="page" id="social-media">
    <div className="vZIxwElAFt">
      <h1 className="lnkinoRPBy">Social Media</h1>
      <div className="container">
        <div className="SqSFRUSOQv">
          <div className="eZNSpGJbov" onClick={() => openLink(['https://github.com/Vins2106'])}>
            <img src={GITHUB} alt="Github Logo" />
            <h3>Github</h3>
          </div>
          <div className="eZNSpGJbov" onClick={() => openLink(['https://twitter.com/Vins2106_'])}>
            <img src={TWITTER} alt="Twitter Logo" />
            <h3>Twitter</h3>
          </div>
          <div className="eZNSpGJbov" onClick={() => openLink(['https://linkedin.com/in/vincent-saerang-6236a9222'])}>
            <img src={LINKEDIN} alt="Linked In Logo" />
            <h3>Linked In</h3>
          </div>
          <div className="eZNSpGJbov" onClick={() => openLink(['https://instagram.com/Vins2106'])}>
            <img src={INSTAGRAM} alt="Instagram Logo" />
            <h3>Instagram</h3>
          </div>
          <div className="eZNSpGJbov" onClick={() => openLink(['https://youtube.com/c/Vins2106'])}>
            <img src={YOUTUBE} alt="YouTube Logo" />
            <h3>YouTube</h3>
          </div>
          <div className="eZNSpGJbov" onClick={copyEmail}>
            <img src={MAIL} alt="Email Logo" />
            <h3 id="email">Email</h3>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )  
}
  
export default SocialMedia;    