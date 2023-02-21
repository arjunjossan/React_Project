import React, { useState } from 'react'
import './NavBar.css'

function NavBar() {

	const[myStyle,setMyStyle] = useState({
		color:'white',
		backgroundColor:'black',
	});
	const[mode,setMode] = useState("Light");

	const changeMode = () =>{
		if (mode === 'Dark') {
			setMyStyle({
				color:'white',
				backgroundColor:'black',
			});
			setMode("Light");
		}
		else if (mode === 'Light') {
			setMyStyle({
				color:'black',
		        backgroundColor:'white',
			});
			setMode("Dark");
		} 
	}

  return (
	<div>
	  <>
	  <div className='header'>
	  <div className='navbar-list' style={myStyle} >
	  <a style={myStyle} href='/'>Home</a>
	  <a style={myStyle} href='/'>About</a>
	  <a style={myStyle} href='/'>Contact</a>
	  <input style={myStyle} placeholder='Enter Your search' type={'search'}/><button style={myStyle}>search</button>
	  <button style={myStyle} type='submit' onClick={changeMode}>{mode}</button>
	  <span className='sign-up'>
	  <a  style={myStyle} href='/'>Signup</a>
	  <a style={myStyle} href='/'>Login</a>
	  </span>
	  </div>
	  </div>
	  </>
	</div>
  )
}

export default NavBar;
