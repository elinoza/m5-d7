import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Gallery from './components/Gallery'
import Gallery2 from './components/Gallery2'
import MovieDetails from './components/MovieDetails'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import MyNavBar from "./components/MyNavBar"
class App extends React.Component {
  render () {
    
    return (
      <>
      <Router>
      <MyNavBar/>


      <Route path ="/" exact render={(
              props // props are history, location, match
            ) => <Gallery search="" type="" {...props}/> } />
      <Route path ="/" exact render={(
              props // props are history, location, match
            ) => <Gallery2 search="" type="" {...props}/> } />
      <Route path="/details/:id" component={MovieDetails} />
            
     
      </Router>
   
       </>
    )
  }
}

export default App;
