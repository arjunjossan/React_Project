import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import './TypoGraphy.css'

function TypoGraphy(props) {

	const handle = (event) =>{
		setText(event.target.value)
	}

	const upperCase = () =>{
		let upper = text.toUpperCase();
		setText(upper);
	}
	const lowerCase = () =>{
		let lower = text.toLowerCase();
		setText(lower);
	}
	const [text, setText] = useState("Enter text here");

  return (
	  <>
	  <div className='typo'>
	  <label for='TypoGraphy'>{props.heading}</label>
	  <input className='input' type={'text'} value={text} onChange={handle}/>
	  <br></br>
	  <button className='btn' onClick={upperCase}>UpperCase</button>
	   <button className='btn' onClick={lowerCase}>LowerCase</button> 
	  <h3>Preview of your writing : {text}</h3>
	  <h3>Total letters is : {text.length}</h3>
	  <h3>Total words are : {text.split(' ').length}</h3>
</div>
	  </>
  )
}

export default TypoGraphy;
