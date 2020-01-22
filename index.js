const blogTitle = document.querySelector("#title");
const blogBody = document.querySelector("#body");
const submitButton = document.querySelector("#button");
const blogPreview =  document.querySelector("#preview");
const newBlogPostform= document.querySelector('#blog-form');
const postsContainer=document.querySelector('#posts>.container');
const editForm =document.querySelector('#edit-post-form');
const edit_close_btn=document.querySelector('#edit-close-btn');

const ourPost = {
  "title":"",
  "body":"",
  "post_time":""
};


blogTitle.addEventListener('keyup',(e)=>{
  let text =e.target.value;
  blogPreview.querySelector('h3.title').innerText=text;
  ourPost.title=text;
})

blogBody.addEventListener('keyup',(e)=>{
  let text =e.target.value;
  blogPreview.querySelector('p.body').innerText=text;
  ourPost.body=text;
})


newBlogPostform.addEventListener('submit',(e)=>{
  e.preventDefault();

  let postArray=JSON.parse(localStorage.getItem('post'));
  if(postArray===null){
    postArray=[]
  }
  ourPost.post_time= new Date();
  postArray.push(ourPost)
  localStorage.setItem('post', JSON.stringify(postArray));
  blogBody.value="";
  blogTitle.value="";
  location.reload(true)
})

window.addEventListener('load', (event) => {
  let dbPosts=JSON.parse(localStorage.getItem('post'));
  if(dbPosts){
    dbPosts.forEach((post , index)=> {
    let postElement=document.createElement("div");
    postElement.setAttribute('id',index);
    postElement.setAttribute('class','blog-post');
    postElement.innerHTML=`
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <div class="row settings-row" >
          <div>
            <i class="fa fa-pencil post-button edit" aria-hidden="true"></i>
            <i class="fa fa-trash post-button delete" aria-hidden="true"></i>
          </div>
          <div >
            ${post.post_time}
          </div>
          </div>
          <hr/>
          `;
    postsContainer.appendChild(postElement);
    //delete button event
    postElement.querySelector('.post-button.delete').addEventListener('click',(e)=>{
      let element=e.target.parentElement.parentElement.parentElement;

      let post_id=parseInt(element.getAttribute('id'));
      let postArray=JSON.parse(localStorage.getItem('post'));
      postArray.splice(post_id,1);
      localStorage.setItem('post', JSON.stringify(postArray));
      element.remove();
    })

    postElement.querySelector('.post-button.edit').addEventListener('click',(e)=>{
      let element=e.target.parentElement.parentElement.parentElement;
      let post_id=parseInt(element.getAttribute('id'));
      let postArray=JSON.parse(localStorage.getItem('post'));
      let titleInput=editForm.querySelector('#edit-title');
      let bodyInput=editForm.querySelector('#edit-body');
      let editSubmit=editForm.querySelector('#edit-blog-form');

      edit_close_btn.addEventListener('click',(e)=>{
        titleInput.value="";
        bodyInput.value="";
        editForm.style.display='none';
        editForm.style.visibility='hidden';
      });

      titleInput.value=postArray[post_id].title
      bodyInput.value=postArray[post_id].body
      editForm.style.display='block';
      editForm.style.visibility='visible';

      editSubmit.addEventListener('submit',(e)=>{
        e.preventDefault();
        postArray[post_id].title=titleInput.value
        postArray[post_id].body=bodyInput.value
        localStorage.setItem('post', JSON.stringify(postArray));
        titleInput.value="";
        bodyInput.value="";
      editForm.style.display='none';
      editForm.style.visibility='hidden';
      location.reload(true)
      })

    

    })


    
    });
  }
});


