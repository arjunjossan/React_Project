import React from 'react'
import './MainBar.css'
import TypoGraphy from './TypoGraphy'
import News from './News'
import Calender from './Calender'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewsDetailDesc from './NewsDetailDesc'

// import Main from './Main.jpg'

function MainBar(props) {
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
		
		 {/* <div className='main-bar'><img className='Main-Pic' src={Main} alt='not found'/></div> */}
		<div className='main-bar'>
	<Router>
      <Routes>
        <Route 
        element={<TypoGraphy/>}
        path="TypoGraphy"
        />

        <Route 
        element={<News/>}
        path="News"
        >
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
        </Route>


        <Route 
        element={<Calender/>}
        path="Calender"
        />

      </Routes>
    </Router>
	</div> 
		</>
  )
}

export default MainBar
