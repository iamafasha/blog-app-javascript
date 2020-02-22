import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import Post from './Post';
import { PostsContext } from './../context/PostContext';

const Posts = () => {
    const {posts} = useContext(PostsContext)
    
    if(posts.length==0){
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
                {
                posts.map((post,index)=>{
                    return <Post index={index} key={index} post={post} />;
                    })
                }
                </div>
            </div>
        )
    }
}

Posts.propTypes = {

}

export default Posts
