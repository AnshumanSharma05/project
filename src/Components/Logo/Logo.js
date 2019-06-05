import React from "react";
import Tilt from 'react-tilt';
import logo from "./Logo.png"

const Logo =()=>{
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-5" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
			 <div className="Tilt-inner pa3"> <img style={{paddingTop:'50px'}}alt ='logo' src ={logo}/> </div>
			</Tilt>

		</div>
		)
}

export default Logo;