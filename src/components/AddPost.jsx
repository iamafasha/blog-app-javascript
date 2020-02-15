import React from "react";
import PropTypes from "prop-types";

const AddPost = ({onInputChange,onSubmitPost,post}) => {
  return (
    <div>
      <form onSubmit={onSubmitPost} action="post" >
      <h3>
          <input 
          required
          placeholder="Title"
          className="form-control"
          type="text"
          id="title" 
          autoFocus="on" 
          autoComplete="off" 
          onChange={onInputChange}
          name="title"
          value={post.title}
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
          onChange={onInputChange}
          value={post.body}
          ></textarea>
            </p>
          <button className="form-control" id="button" type="submit">Add New Post</button>
      </form>
    </div>
  );
};

AddPost.propTypes = {};

export default AddPost;
