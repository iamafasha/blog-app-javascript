import React ,{useState} from 'react'

export const EditPost = ({index,reRender}) => {
    const posts=JSON.parse(window.localStorage.getItem("posts"))[index]
    const [newPost, setPost] = useState(posts);
    
    const onInputChange=(e) => {
        let x=Object.assign(newPost, {
            [e.target.name]:e.target.value
        });
        setPost({...x});
    }

    const onSubmit=(e) => {
        e.preventDefault()
        let posts=JSON.parse(window.localStorage.getItem("posts"))
        if(posts==null){
            posts=[];
        }
        posts[index]={...newPost,post_time:new Date()};
        localStorage.setItem('posts', JSON.stringify(posts));
        reRender();
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
                <input onChange={onInputChange} value={newPost.title} name="title" required placeholder="Title" className="form-control" type="text" id="edit-title" autoFocus="" /> </h3> <br/>
                <p>
                <textarea  onChange={onInputChange} value={newPost.body} name="body"  required placeholder="Type your body here." className="form-control" id="edit-body" rows="3"></textarea></p>
        <button className="form-control" id="edit-button" type="submit">Save Post</button>
        </form>
        </div>
    )
}