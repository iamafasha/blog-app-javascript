import React, { Component } from "react";
import AddPost from './components/AddPost';
import PreviewPost from './components/PreviewPost';
import Posts from './components/Posts';
import { EditPost } from './components/EditPost';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: {
        title:"",
        body:""
      },
      editPost:{
        id:undefined
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

  onEditPostInputChange=(e)=>{
    e.preventDefault();
    const name  = e.target.name;
    const value = e.target.value;
    this.setState((prev)=>{
      let editPost = {...prev.editPost,[name]:value}
      return {
        editPost
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

  delete=(index)=>{
    this.setState((prev)=>{
      let posts=[...prev.posts.splice(index,1)];
      posts=prev.posts;
      return {
        posts
      }
    })
  }

  update_post=(e)=>{
    e.preventDefault()
    
    this.setState((prev)=>{
      const {body,title}=Object.assign({},{...prev.editPost});
      const {post_time} = {...prev.posts[prev.editPost.id]}
      const upDatedPost={body,title,post_time}
      prev.posts[prev.editPost.id]=upDatedPost;
      prev.editPost.id=undefined;
      return prev;
    })
  }

  editPostMode=()=>{
    if(this.state.editPost.id!=undefined){
    return <EditPost onSave={this.update_post} onChange={this.onEditPostInputChange} onclose={this.cancelEditPost} visible={true} post={this.state.posts[this.state.editPost.id]} />
    }
  }

  cancelEditPost=()=>{
    this.setState((prev)=>{
      prev.editPost.id=undefined
      return prev;
    })
  }
  editPost=(index)=>{
    this.setState((prev)=>{
      prev.editPost.id=index
      return prev;
    })
  }
  render() {
    return (
      <>
      <AddPost post={this.state.newPost} onSubmitPost={this.onSubmitPost} onInputChange={this.onInputChange} />
      <PreviewPost post={this.state.newPost} />
      <Posts onEditPost={this.editPost} delete_post={this.delete} posts={this.state.posts} />
      {this.editPostMode()}
      </>
    );
  }
}

export default App;
