import './App.css';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import MainBar from './components/MainBar';
import Footer from './components/Footer';
// import TypoGraphy from './components/TypoGraphy';
// import News from './components/News';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar title="Navbar"/>
    <LeftBar/>
    <MainBar/>
    {/* <Router>
      <Routes>
        <Route 
        element={<TypoGraphy/>}
        path="TypoGraphy"
        />

        <Route 
        element={<News/>}
        path="News"
        />
      </Routes>
    </Router> */}
    <Footer/>
    </>
    
  );
}

export default App;
