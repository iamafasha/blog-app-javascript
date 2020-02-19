import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const Posts = ({reRender}) => {
    let posts=JSON.parse(window.localStorage.getItem("posts"))
       if(posts==null||posts.length==0){
        return (
             <div className="row" id="posts" >
                <div className="container">
                    <h2>No posts to display</h2>
                </div>
            </div>
        )
       }else{
        return (
            <div className="row" id="posts" >
                <div className="container">
                {posts.map((post,index)=>{
                    return <Post reRender={reRender} index={index} key={index} post={post} />
                    })}
                </div>
            </div>
        )
    }
}

Posts.propTypes = {

}

export default Posts
