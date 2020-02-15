import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post,index,delete_post,onEditPost}) => {
    return (
        <div>
          <h3 className="title">{post.title}</h3>
        <p className="body">{post.body}</p>
        <div className="row settings-row">
          <div>
            <i onClick={()=>onEditPost(index)} className="fa fa-pencil post-button edit" aria-hidden="true"></i>
            <i onClick={()=>delete_post(index)} className="fa fa-trash post-button delete" aria-hidden="true"></i>
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
