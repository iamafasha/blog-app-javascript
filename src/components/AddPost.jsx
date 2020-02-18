import React,{ useState } from "react";
import PropTypes from "prop-types";

const AddPost = ({reRender}) => {
  const [newPost, setPost] = useState({
    title:"",
    body:""
  });

  const onInputChange=(e) => {
      let x=Object.assign(newPost, {
        [e.target.name]:e.target.value
      });
      setPost({...x});
  }

  const onSubmit=(e) => {
      e.preventDefault()
      let posts=JSON.parse(window.localStorage.getItem("posts"))
      if(posts==null){
        posts=[];
      }
      posts.unshift({...newPost,post_time:new Date()});
      localStorage.setItem('posts', JSON.stringify(posts));
      setPost({
        title:"",
        body:""
      })
      reRender();
  }

  return (
    <div>
      <form onSubmit={onSubmit}  action="post" >
      <h3>
          <input 
          required
          placeholder="Title"
          className="form-control"
          type="text"
          id="title" 
          autoFocus="on" 
          autoComplete="off" 
          value={newPost.title}
          name="title"
          onChange={onInputChange}
          />

          </h3>
          <br/>
          <p>
          <textarea
          required
          placeholder="Type your body here."
          className="form-control"
          name="body"
          id="body"
          rows="3"
          value={newPost.body}
          onChange={onInputChange}
          ></textarea>
            </p>
          <button className="form-control" id="button" type="submit">Add New Post</button>
      </form>
    </div>
  );
};

AddPost.propTypes = {};

export default AddPost;
