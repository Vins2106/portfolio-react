import React from 'react';

const HomeMain = ({page, setPage}) => {

  const navigateTo = (name) => {
    setPage(name);
  }

  return (
    <div className="hTOlXqlAoy">
      <div className="container">
        <div className="MmrZXOYNaq">
            <h3 class="pnTUinhSYI">Vincent saerang, indonesia</h3>
            <h1 class="ohsTtAYyLu">Client number <strong>one</strong>.</h1>
            <p class="yyySFwNuef">im from Indonesia, manado.
      i’ve work as <strong>web developer</strong> for 1 year and work in <strong><a href="https://bellshade.org">Bellshade</a></strong> as <strong>Web Team</strong> and <strong>HTML-CSS Team</strong>. my full name is <strong>Vincent Devon Saerang</strong>, <strong>14</strong> years old
            </p>
            <button class="btn eVwOKusZmc" onClick={() => navigateTo('social-media')}>
              Contact me
            </button>        
        </div>
      </div>
    </div>
  )  
}

export default HomeMain;    