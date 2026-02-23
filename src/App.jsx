import React  from 'react';
import './App.css';
import HeaderComponent from './Components/CommonsComponents/HeaderComponent';
import HomeComponent from './Components/HomePageComponents/HomeComponent';
import FooterComponent from './Components/CommonsComponents/FooterComponent';
import NotFoundComponent from './Components/CommonsComponents/NotFoundComponent';
import ArticleBlogComponent from './Components/BlogPagesComponents/ArticleBlogComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path="/panenka" element={<ArticleBlogComponent articlename="panenka" />} />
            <Route path="/boursonomic" element={<ArticleBlogComponent articlename="boursonomic" />} />
            <Route path="/data4good" element={<ArticleBlogComponent articlename="data4good" />} />
            <Route path="/betit" element={<ArticleBlogComponent articlename="betit" />} />
            <Route path="/worldcup-dashboard" element={<ArticleBlogComponent articlename="worldcup-dashboard" />} />
            <Route path="/fil-rouge" element={<ArticleBlogComponent articlename="fil-rouge" />} />
            <Route path="/nosql" element={<ArticleBlogComponent articlename="nosql" />} />
            <Route path="/wind-turbine" element={<ArticleBlogComponent articlename="wind-turbine" />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  )
}

export default App;
