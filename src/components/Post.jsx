import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import { EditPost} from './EditPost';

const Post = ({post,index ,reRender}) => {
  const [editMode,setEditMode]= useState(false);
  const editModeRendering =() =>{
    setEditMode(false);
    reRender();
  }

  const deletePost=()=>{
    let postArray=JSON.parse(localStorage.getItem('posts'));
    postArray.splice(index,1);
    localStorage.setItem('posts', JSON.stringify(postArray));
    reRender();
  }

  if(editMode){
    return <EditPost reRender={editModeRendering} index={index} />
  }else{
    return(
    <div>
    <h3 className="title">{post.title}</h3>
    <p className="body">{post.body}</p>
    <div className="row settings-row">
      <div>
        <i onClick={()=>setEditMode(true)} className="fa fa-pencil post-button edit" aria-hidden="true"></i>
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
}

Post.propTypes = {

}

export default Post
