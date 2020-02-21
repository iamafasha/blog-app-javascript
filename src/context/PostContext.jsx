import React , { createContext ,useState } from "react"

export const PostsContext = createContext();

 function PostContextProvider(props) {
    
    const [post , setPost]= useState([34]);

    return (
        <PostsContext.Provider value={{...post}} >
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostContextProvider