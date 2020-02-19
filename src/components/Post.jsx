import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import { EditPost} from './EditPost';
import { Link } from 'react-router-dom'

const Post = ({post,index ,reRender}) => {


  const deletePost=()=>{
    let postArray=JSON.parse(localStorage.getItem('posts'));
    postArray.splice(index,1);
    localStorage.setItem('posts', JSON.stringify(postArray));
    reRender();
  }
  
    return(
    <div>
    <h3 className="title">{post.title}</h3>
    <p className="body">{post.body}</p>
    <div className="row settings-row">
      <div>
          <Link to={"/edit/"+index}>
          <i className="fa fa-pencil post-button edit" aria-hidden="true"></i>
          </Link>
        <i onClick={deletePost} className="fa fa-trash post-button delete" aria-hidden="true"></i>
      </div>
      <div>
        {(post.post_time).toString()}
      </div>
      </div>
    <hr/>
    </div>
    )
  
}

Post.propTypes = {

}

export default Post
