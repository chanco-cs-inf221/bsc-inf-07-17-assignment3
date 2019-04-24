import React, { Component } from 'react';
import FormBlogg from './FormBlogg';
//css in the same folder



class   Updateform  extends Component {
      state = {
        title:'',
        post :'',
        Author : '',

    }
    //handle change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});   
        console.log(this.obj);
        window.localStorage.setItem('state' ,JSON.stringify(this.state) ) 
         }
  

  render() {
      const{title,post,Author} = this.state;
      const values ={title,post,Author};
    return (
        <div className="wrap">


        <FormBlogg
        handleChange = {this.handleChange}
        values = {values} 
        />
        </div>
    );
  }
}

export default Updateform;
