import React from 'react';
import HomeMain from './Home.Main.js';
import HomeProjectInfo from './Home.ProjectInfo.js';
import HomeProjects from './Home.Projects.js';
import HomeCertificates from './Home.Certificates.js';

const Home = ({page, setPage}) => {
  return (
    <div className="page active-page" id="home">
      <div className="main">
        <HomeMain
        page={page}
        setPage={setPage} />   
        <HomeProjectInfo />
        <HomeProjects />
        <HomeCertificates />
      </div>
    </div>    
  )  
}

export default Home;