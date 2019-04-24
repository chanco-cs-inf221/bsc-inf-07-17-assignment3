import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';


//css in the same folder
import './form.css';



class   FormBlog  extends Component {
    

  
  render() {
      const {values,handleChange} = this.props;

    return (
        <div className="wrap">

        <div id="Details">
        <h2>fill to upDate the blogg</h2>
        <form>
            <lebel>title</lebel><br></br>
            <input type="text" name ="title" placeholder="Enter BloggPost title" onChange=
            {handleChange('title')}
            defaultValue={values.title}
            /><br></br>

                
            <lebel>Author</lebel><br></br>
            <input type="text" name ="Author" placeholder="Author's name"
            onChange=
            {handleChange('Author')}
            defaultValue={values.Author}
            /><br></br>
            
            <lebel>Post</lebel><br></br>
            <textarea name ="Post" placeholder="post"
            onChange=
            {handleChange('post')}
            defaultValue={values.post}
            /><br></br>

<Link to="/Home">Done</Link>


        </form>
        </div>

        </div>
    );
  }
}

export default  FormBlog;
