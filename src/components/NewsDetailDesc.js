import React from 'react'

function NewsDetailDesc(props) {
  return (
	  <>
	<div>
	  <ul>
	  <img  src={props.link}/>
	  <li>{props.tit}</li> 
	  <li>{props.desc}</li>
	  </ul>
	</div>

	</>
  )
}

export default NewsDetailDesc
