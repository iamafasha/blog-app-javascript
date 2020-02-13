import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const Posts = props => {
    return (
        <div className="row" id="posts" >
            <div className="container">
            <Post />
            </div>
        </div>
    )
}

Posts.propTypes = {

}

export default Posts
