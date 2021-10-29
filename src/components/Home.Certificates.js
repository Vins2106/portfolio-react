import React from 'react';
import c1 from '../images/certificate.jpg';
import c2 from '../images/certificate2.jpg';
import c3 from '../images/certificate3.png';
import c4 from '../images/certificate4.jpg';

const Home = () => {
  return (
			<div className="DvkJKALbCF">
					<h1 className="aViIYLwzyf border-b" id="certificate-section">Certificate</h1>

		     	<div className="container">
		       		<div className="lHMdJheJdX">

		         	   <div className="fFuLoeAwhy">
		                <img src={c1} alt="Project 1" />
		              	<span className="wwuRzLaunl">HTML Completed - Sololearn</span>
		         	   </div>

		          	  <div className="fFuLoeAwhy">
		              	<img src={c2} alt="Project 2" />
		              	<span className="wwuRzLaunl">CSS Completed - Sololearn</span>
		          	  </div>

		          	  <div className="fFuLoeAwhy">
		              	<img src={c3} alt="Project 3" />
		              	<span className="wwuRzLaunl">JavaScript Completed - Sololearn</span>
		          	  </div>

		           	  <div className="fFuLoeAwhy">
		                <img src={c4} alt="Project 4" />
		            	<span className="wwuRzLaunl">Coding For Marketers - Sololearn</span>
		            	</div>

		            </div>
		       	</div>

		    </div>  
  )  
}

export default Home;