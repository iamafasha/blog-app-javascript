import React, { Component} from "react";
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import { EditPost } from './components/EditPost';

class App extends Component {
  reRenderPosts=()=>{
    this.forceUpdate();
  }
  
  render() {
    return (
      <>
      <AddPost  reRender={this.reRenderPosts }  />
      {/* <PreviewPost /> */}
      <Posts  reRender={ this.reRenderPosts } />
      </>
    );
  }
}

export default App;
