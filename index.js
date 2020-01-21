const blogTitle = document.querySelector("#title");
const blogBody = document.querySelector("#body");
const submitButton = document.querySelector("#button");
const blogPreview =  document.querySelector("#preview");
const newBlogPostform= document.querySelector('#blog-form');
const postsContainer=document.querySelector('#posts>.container');

let ourPost = {
  "title":"",
  "body":""
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
  
  postArray.push(ourPost)
  localStorage.setItem('post', JSON.stringify(postArray));
  blogBody.value="";
  blogTitle.value="";

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
          <div>

        <i class="fa fa-pencil post-button edit" aria-hidden="true"></i>
        <i class="fa fa-trash post-button delete" aria-hidden="true"></i>
        </div>
          <hr/>
          `;
    postsContainer.appendChild(postElement);
    //delete button event
    postElement.querySelector('.post-button.delete').addEventListener('click',(e)=>{
      let element=e.path[2];
      let post_id=parseInt(element.getAttribute('id'));
      let postArray=JSON.parse(localStorage.getItem('post'));
      postArray.splice(post_id,1);
      localStorage.setItem('post', JSON.stringify(postArray));
      element.remove();
    })
    });
  }
});


