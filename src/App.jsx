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
    console.log(name)
    this.setState((prev)=>{
        let newPost = {...prev.newPost,[name]:value}
        return {
            newPost
        };
    })
  }

  render() {
    return (
      <>
       <AddPost onInputChange={this.onInputChange} />
       <PreviewPost post={this.state.newPost} />
       <Posts/>
      </>
    );
  }
}

export default App;
