import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const Posts = () => {
    let posts=JSON.parse(window.localStorage.getItem("posts"))
       if(posts==null||posts.length==0){
        return (
            <>
            <h2>No posts to display</h2>
            </>
        )
       }else{
        return (
            <>
            {posts.map((post,index)=>{
                return <Post key={index} post={post} />
            })}
            </>
        )
    }
    

    return (
        <div className="row" id="posts" >
            <div className="container">
            </div>
        </div>
    )
}

Posts.propTypes = {

}

export default Posts
