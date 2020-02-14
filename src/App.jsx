import React, { Component } from "react";
import AddPost from './components/AddPost';
import PreviewPost from './components/PreviewPost';
import Posts from './components/Posts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: {
        title:"",
        body:""
      },
      posts:[]
    }
  }

  onInputChange=(e)=>{
    e.preventDefault();
    const name  = e.target.name;
    const value = e.target.value;
    this.setState((prev)=>{
        let newPost = {...prev.newPost,[name]:value}
        return {
            newPost
        };
    })
  }

  onSubmitPost=(e)=>{
    e.preventDefault();
    const newPost=this.state.newPost;
    newPost.post_time=new Date();
    this.setState((prev)=>{
      let new_posts=[prev.newPost,...prev.posts]
      return {
          posts:new_posts
      }
  },()=>{
      this.setState({newPost: {
        title:"",
        body:"",
        post_time:undefined
      }})
  })


  }

  render() {
    return (
      <>
       <AddPost post={this.state.newPost} onSubmitPost={this.onSubmitPost} onInputChange={this.onInputChange} />
       <PreviewPost post={this.state.newPost} />
       <Posts posts={this.state.posts} />
      </>
    );
  }
}

export default App;
