import React from "react";
import PropTypes from "prop-types";

const AddPost = props => {
  return (
    <div>
      <form>
      <h3>
          <input 
          required=""
          placeholder="Title"
          className="form-control"
          type="text"
          id="title" 
          autoFocus="" 
          autoComplete="off" 
          />
          </h3>
          <br/>
          <p>
          <textarea
          required=""
          placeholder="Type your body here."
          className="form-control"
          name=""
          id="body"
          rows="3"
          ></textarea>
            </p>
          <button className="form-control" id="button" type="submit">Add New Post</button>
      </form>
    </div>
  );
};

AddPost.propTypes = {};

export default AddPost;
