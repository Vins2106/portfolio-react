import './App.css';
import Loading from './components/Loading';
import Home from './components/Home.js';
import React, {useState, useEffect} from 'react';
import Navigation from './components/Navigation.js';
import SkillsTools from './components/SkillsTools.js';
import SocialMedia from './components/SocialMedia.js';

function App() {

  const [page, setPage] = useState("");

  useEffect(() => {
    pageHandler();      
  })  

  const pageHandler = () => {
    let st = document.getElementById("st");
    let h = document.getElementById("h");
    let sm = document.getElementById("sm");
    let stPage = document.getElementById("skills-tools");
    let hPage = document.getElementById("home");
    let smPage = document.getElementById("social-media");

    switch (page) {
      case "skills-tools":
        st.classList.add("active");
        h.classList.remove("active");
        sm.classList.remove("active");
        hPage.classList.add("active-process");
        smPage.classList.add("active-process");

        setTimeout(() => {
          hPage.classList.remove("active-page");
          smPage.classList.remove("active-page");
          stPage.classList.add("active-page");
          hPage.classList.remove("active-process");
          smPage.classList.remove("active-process");
        }, 1500)
      break;

      case "social-media":
        sm.classList.add("active");
        h.classList.remove("active");
        st.classList.remove("active");
        hPage.classList.add("active-process");
        stPage.classList.add("active-process");

        setTimeout(() => {
          hPage.classList.remove("active-page");
          stPage.classList.remove("active-page");
          smPage.classList.add("active-page");
          hPage.classList.remove("active-process");
          stPage.classList.remove("active-process");
        }, 1500)
      break;

      default:
        h.classList.add("active");
        st.classList.remove("active");
        sm.classList.remove("active");
        stPage.classList.add("active-process");
        smPage.classList.add("active-process");

        setTimeout(() => {
          stPage.classList.remove("active-page");
          smPage.classList.remove("active-page");
          hPage.classList.add("active-page");
          stPage.classList.remove("active-process");
          smPage.classList.remove("active-process");
        }, 1500)
    }      
  }

  return (
    <div className="App">
        <Loading 
        page={page}
        setPage={setPage} />
        <Home
        page={page}
        setPage={setPage} />

        <SkillsTools />

        <SocialMedia />

        <Navigation
        page={page}
        setPage={setPage} />        
    </div>
  );
}

export default App;
