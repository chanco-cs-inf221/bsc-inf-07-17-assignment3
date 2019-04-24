import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/Pages/homePage';
import About from './components/Pages/About';
import Updateform from './components/Pages/Updateform';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      <Header/>
      

      <Route exact path ='/' component = {Updateform} />
      <Route exact path ='/Home' component = {Homepage} />
      <Route exact path ='/About' component = {About} />
      <Route exact path ='/Update' component = {Updateform} />

      <Footer/>

       </div>
   
      </Router>
       );
  }
}

export default App;
