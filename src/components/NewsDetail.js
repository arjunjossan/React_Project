import React from 'react'
import './NewsDetail.css'


function NewsDetail(props) {
  return (
	<>
	<div className='newsDetailcall'>
	  <ul>
	  <img className='news_image' src={props.link}/>
	  <li>{props.tit}</li> 
	  <li><a href={props.path}>read more</a></li>
	  </ul>
	</div>
	</>
  )
}

export default NewsDetail
