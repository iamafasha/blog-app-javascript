import React, { createContext, useState, useEffect } from "react";

export const PostsContext = createContext();

 function PostContextProvider(props) {
    let dbposts=JSON.parse(localStorage.getItem('posts'));

    if(dbposts===null){
      dbposts=[]
    }
    const [posts , setPost]= useState(dbposts);

    const deletePost=(index)=>{
        const oldPost = [...posts];
        oldPost.splice(index, 1);
        setPost(oldPost);
    }
    
    const updatePost = (index ,newPost)=>{
       const oldPost = [...posts];
       oldPost[index]=newPost
       setPost(oldPost);
      }

      useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
      });
    

    return (
      <PostsContext.Provider value={{ posts, deletePost, updatePost }}>
        {props.children}
      </PostsContext.Provider>
    );
}

export default PostContextProvider