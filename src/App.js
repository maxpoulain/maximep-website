import React  from 'react';
import './App.css';
import HeaderComponent from './Components/CommonsComponents/HeaderComponent';
import HomeComponent from './Components/HomePageComponents/HomeComponent';
import FooterComponent from './Components/CommonsComponents/FooterComponent';
import NotFoundComponent from './Components/CommonsComponents/NotFoundComponent';
import ArticleBlogComponent from './Components/BlogPagesComponents/ArticleBlogComponent';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent />
          <Switch>
            <Route exact path='/' component={HomeComponent}></Route>
            <Route exact path="/boursonomic" component={() => <ArticleBlogComponent articlename="boursonomic" />}></Route>
            <Route exact path="/data4good" component={() => <ArticleBlogComponent articlename="data4good" />}></Route>
            <Route exact path="/betit" component={() => <ArticleBlogComponent articlename="betit" />}></Route>
            <Route exact path="/worldcup-dashbord" component={() => <ArticleBlogComponent articlename="worldcup-dashbord" />}></Route>
            <Route exact path="/fil-rouge" component={() => <ArticleBlogComponent articlename="fil-rouge" />}></Route>
            <Route exact path="/nosql" component={() => <ArticleBlogComponent articlename="nosql" />}></Route>
            <Route exact path="/wind-turbine" component={() => <ArticleBlogComponent articlename="wind-turbine" />}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  )
}

export default App;
