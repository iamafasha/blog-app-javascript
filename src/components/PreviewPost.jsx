import React from 'react'

const PreviewPost = ({post}) => {
    return (
        <div className="preview">
             
             <h3 
             className="title"
             >{post.title}</h3>
        <p
        className="body"
        >{post.body}</p>
        <hr/>
        </div>
    )
}

export default PreviewPost;
