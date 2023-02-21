import React,{useState} from 'react'
// import Proptypes from 'prop-types'
import './LeftBar.css'



function LeftBar() {
	const [buttonText,setButtonText] = useState("Enable Light Mode");
	const [myStyle,setMyStyle] = useState({
		// color:'white',
		// backgroundColor:'black',
	});

	const changeToggleColor = () =>{
		if (buttonText === 'Enable Light Mode') {
			setMyStyle({
				color:'black',
		        backgroundColor:'white',
			
			});
				setButtonText("Enable Dark Mode");
		}
		else if (buttonText === 'Enable Dark Mode') {
			setMyStyle({
				color:'white',
		        backgroundColor:'black',
			});
			setButtonText("Enable Light Mode");
		} 
	}

  return (
	<div>
	  <>
	  <div className='left-bar'  style={myStyle}>
	  <table border={'1px'} className='left-bar-table'  style={myStyle}> 
		<tr><td><a href='TypoGraphy' style={myStyle}>Typography</a></td></tr>
		<tr><td><a href='News'  style={myStyle}>News</a></td></tr>
		{/* <tr><td><a href='/'  style={myStyle} type='submit' onClick={changeToggleColor}>{buttonText}</a></td></tr> */}
		<tr><td><button style={myStyle} onClick={changeToggleColor}>{buttonText}</button></td></tr>
		<tr><td><a href='Calender'  style={myStyle}>Calender</a></td></tr>
		<tr><td><a href='/'  style={myStyle}>Images</a></td></tr>
		<tr><td><a href='/'  style={myStyle}>Timer</a></td></tr>
		<tr><td><a href='/'  style={myStyle}>MoneyGraph</a></td></tr>
		<tr><td><a href='/'  style={myStyle}>Registeration</a></td></tr>
		<tr><td><a href='/'  style={myStyle}>Registeration</a></td></tr>
	  </table>
	  </div>
	  </>
	</div>
  )
}

export default LeftBar;
