import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom"
import { PostsContext } from "./../context/PostContext";

const AddPost = () => {
  const { addPost } = useContext(PostsContext);
  const [newPost, setPost] = useState({
    title:"",
    body:""
  });

  const history = useHistory();

  const onInputChange=(e) => {
      let x=Object.assign(newPost, {
        [e.target.name]:e.target.value
      });
      setPost({...x});
  }
  
  const onSubmit=(e) => {
      e.preventDefault()
      addPost({ ...newPost, post_time: new Date() });
      setPost({
        title:"",
        body:""
      })
      history.push("/")
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
