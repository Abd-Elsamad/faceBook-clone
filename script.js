const postBtn = document.querySelector(".post-btn");
const postInput = document.querySelector(".post-input");
const userName = document.querySelector(".user-name");
const posts = document.querySelector(".posts");

postBtn.addEventListener("click", function () {

    const name = userName.value.trim();
    const text = postInput.value.trim();

    if(name === "" || text === ""){
        alert("Please enter your name and post.");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <h4>${name}</h4>
        <p>${text}</p>

        <div class="post-footer">
            <button class="like-btn">👍 Like (<span>0</span>)</button>
            <button>💬 Comment</button>
            <button>↗ Share</button>

            <button class="delete-btn">
            🗑 Delete
            </button>
        </div>
    `;

    posts.prepend(post);

    postInput.value="";
    
    const likeBtn = post.querySelector(".like-btn");
    const deleteBtn = post.querySelector(".delete-btn");

    deleteBtn.addEventListener("click",function(){
        post.remove();
    });
    const counter = likeBtn.querySelector("span");

    let likes = 0;

    likeBtn.addEventListener("click",function(){
        likes++;
        counter.textContent = likes;
    });

});
const darkBtn = document.getElementById("darkMode");

darkBtn.onclick = function(){
    document.body.classList.toggle("dark");
};