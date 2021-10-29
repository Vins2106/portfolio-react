import React from 'react';

const Loading = () => {
	window.onload = () => {
		document.getElementById('loading-pg').classList.add("loaded")
	}

	return (
		<div className="loading-page" id="loading-pg">
		    <span>Loading page...</span>
  		</div>
	);
}

export default Loading