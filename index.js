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
    dbPosts.forEach(post => {
    let postElement=document.createElement("div")
    postElement.innerHTML=`
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <div>

          <span class="post-button edit" ><i class="fa fa-pencil" aria-hidden="true"></i></span>
          <span class="post-button delete" ><i class="fa fa-trash" aria-hidden="true"></i></span>
          </div>
          <hr/>
          `;
    postsContainer.appendChild(postElement);
    });
  }
});


