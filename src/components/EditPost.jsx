import React from 'react'

export const EditPost = ({visible,post,onclose,onChange,onSave}) => {
    return (
        <div id="edit-post-form" className={ ((visible)?"container edit-post visible overlay":"container edit-post overlay") }>
            <span onClick={onclose} id="edit-close-btn" className="cancel-button pull-right">
                <i className="fa fa-close" aria-hidden="true"></i>
            </span>
            <br/>
            <h2>Edit your post</h2>
            <form className="form-group" id="edit-blog-form" method="post">
            <h3>
                <input name="title" onChange={onChange} defaultValue={post.title} required placeholder="Title" className="form-control" type="text" id="edit-title" autoFocus="" /> </h3> <br/>
                <p>
                    <textarea name="body" onChange={onChange} defaultValue={post.body} required placeholder="Type your body here." className="form-control" id="edit-body" rows="3"></textarea></p>
        <button onClick={onSave} className="form-control" id="edit-button" type="submit">Save Post</button>
        </form>
        </div>
    )
}
