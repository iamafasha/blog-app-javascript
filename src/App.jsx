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

  render() {
    return (
      <>
       <AddPost/>
       <PreviewPost/>
       <Posts/>
      </>
    );
  }
}

export default App;
