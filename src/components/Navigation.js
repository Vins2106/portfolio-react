import React, { useEffect } from 'react';

const Navigation = ({page, setPage}) => {

  const navigateTo = (name) => {
    setPage(name);
  }

  return (
    <div className="mTITjBbPOt shadow-top">
      <div className="container">
        <div className="LXHVmXJYIe">
          <div onClick={() => navigateTo('skills-tools')} className="cmOAmFpylK" id="st">
            <i className="fas fa-code"></i>
            <span className="WKaepGgIbT">Skills & Tools</span>
          </div>
          <div onClick={() => navigateTo('home')} className="cmOAmFpylK active" id="h">
            <i className="fas fa-house"></i>
            <span className="WKaepGgIbT active">Home</span>
          </div>
          <div onClick={() => navigateTo('social-media')} className="cmOAmFpylK" id="sm">
            <i className="fas fa-comment"></i>
            <span className="WKaepGgIbT">Social media</span>
          </div>
        </div>
      </div>
    </div>  
  )  
}

export default Navigation;    