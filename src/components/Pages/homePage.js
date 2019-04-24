import React, { Component } from 'react';
//css in the same folder
import'./homPage.css';


class   Homepage  extends Component {

  myP = JSON.parse (localStorage.getItem("state"));


  render() {
      
    console.log(this.myP);
    return  (
      
        <div className="wrap">
            <h2>{this.myP.title}
</h2>   
 <br></br> 
    <p> <i>The publisher of this blogg is : </i>
          {this.myP.Author}

</p><br></br>

<p>    {this.myP.post}

</p><br></br>

        </div>
    );
  }
}

export default Homepage;
