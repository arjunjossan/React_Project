import React from 'react'
import './News.css'
import NewsDetail from './NewsDetail';
// import NewsDetailDesc from './NewsDetailDesc';
import { Outlet } from 'react-router-dom'


function News() {

	var news = [
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		{
			image:'https://img.etimg.com/thumb/width-310,height-240,msid-98101442/india-invokes-emergency-law-to-force-coal-based-power-plants-to-up-output.jpg',
			description:'Many of Indias power plants that use imported coal, including those owned by Adani Power and Tata Power in the western state of Gujarat, have not operated at full capacity recently because they have found it difficult to compete with power generated from cheap domestic coal',
			title:'India invokes emergency',
		},
		
	];
  return (

<>
	<div className='newsDetailcall'>
	  <NewsDetail tit={news[0].title} desc={news[0].description} link={news[0].image} path='/News/news-1' />
	  <NewsDetail tit={news[1].title} desc={news[1].description} link={news[1].image} path='/News/news-2' />
	  <NewsDetail tit={news[2].title} desc={news[2].description} link={news[2].image} path='/News/news-3' />
	  <NewsDetail tit={news[3].title} desc={news[3].description} link={news[3].image} path='/News/news-4' />
	  <NewsDetail tit={news[4].title} desc={news[4].description} link={news[4].image} path='/News/news-5' />
	  <NewsDetail tit={news[5].title} desc={news[5].description} link={news[5].image} path='/News/news-6' />
	  <NewsDetail tit={news[5].title} desc={news[5].description} link={news[5].image} path='/News/news-6' />
	  

	  </div>
<hr></hr>
<Outlet/>
{/* <Router>
	<Routes>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-1"
		/>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-2"
		/>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-3"
		/>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-4"
		/>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-5"
		/>
		<Route
		element={<NewsDetailDesc tit={news[0].title} desc={news[0].description} link={news[0].image}/>}
		path="news-6"
		/>
	</Routes>
</Router> */}

</>
  )
}

export default News
