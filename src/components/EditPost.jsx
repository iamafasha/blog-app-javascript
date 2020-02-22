import React ,{useState , useContext } from 'react'
import { useParams ,useHistory} from "react-router-dom";
import { PostsContext } from "./../context/PostContext";

export const EditPost = ({reRender}) => {
    const history = useHistory();
    const params = useParams();
    const { posts, updatePost } = useContext(PostsContext);
    const [post, setPost] = useState(posts[params.id]);
    
    const onInputChange=(e) => {
        let x=Object.assign(post, {
            [e.target.name]:e.target.value
        });
        setPost({...x});
    }

    const onSubmit=(e) => {
        e.preventDefault()
        updatePost(params.id ,post)
        history.push("/")
    }
    return (
        <div id="edit-post-form" className="container edit-post visible overlay" >
            <span onClick={onclose} id="edit-close-btn" className="cancel-button pull-right">
                <i className="fa fa-close" aria-hidden="true"></i>
            </span>
            <br/>
            <h2>Edit your post</h2>
            <form onSubmit={onSubmit} className="form-group" id="edit-blog-form" method="post">
            <h3>
                <input onChange={onInputChange} value={post.title} name="title" required placeholder="Title" className="form-control" type="text" id="edit-title" autoFocus="" /> </h3> <br/>
                <p>
                <textarea  onChange={onInputChange} value={post.body} name="body"  required placeholder="Type your body here." className="form-control" id="edit-body" rows="3"></textarea></p>
        <button className="form-control" id="edit-button" type="submit">Save Post</button>
        </form>
        </div>
    )
}