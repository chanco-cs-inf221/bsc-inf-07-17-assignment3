import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';
//css in the same folder
import './headerStyle.css';


class Header extends Component {
  render() {
    return (
        <header>

          <div className="blog">
         <h1> Blogger us</h1>

          <nav>
            <ul>

              
            <li>
              <Link to="/Home">Home</Link>
              </li>
              <li>           
              <Link to="/Update">Update</Link>
              </li>
              <li>
              <Link to="/About">About</Link>
                
              </li>
            </ul>
          </nav>

          </div>


        </header>
    );
  }
}

export default Header;
