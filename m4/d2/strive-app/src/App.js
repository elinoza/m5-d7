import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import Home from "./components/Home";
import './App.css'; 




class App extends React.Component{ 
 
  render(){
      return (
        <>
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      <Home/>
      <MyFooter/>
     
        </>
      );
}
}

export default App;
