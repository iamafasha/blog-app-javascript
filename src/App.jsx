import React, { Component} from "react";
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import {BrowserRouter as Router , Switch , Link , Route, useParams } from 'react-router-dom'
import { EditPost } from './components/EditPost';

class App extends Component {
   constructor(){
     super();
     this.id=0;
   }

  reRenderPosts=()=>{
    this.forceUpdate();
  }
  
  render() {
    return (
      <Router>
      <Switch >
        <Route path="/create">
          <AddPost  reRender={this.reRenderPosts }  />
          {/* <PreviewPost /> */}
        </Route>

        <Route exact path="/">
        <span> <Link to="/create">Create Post</Link></span>
          <Posts  reRender={ this.reRenderPosts } />
        </Route>
        <Route path="/edit/:id">
          <EditPost reRender={this.reRenderPosts} />
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
