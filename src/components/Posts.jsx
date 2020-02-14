import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const Posts = ({posts,delete_post}) => {

    const posts_render = (posts) => {
       if(posts==undefined||posts.length==0){
        return (
            <>
            <h2>No posts to display</h2>
            </>
        )
       }else{
        return (
            <>
            {posts.map((post,index)=>{
                return <Post index={index} delete_post={delete_post} key={index} post={post}/>
            })}
            </>
        )
       }
    }
    

    return (
        <div className="row" id="posts" >
            <div className="container">
            {posts_render(posts)}
            </div>
        </div>
    )
}

Posts.propTypes = {

}

export default Posts
