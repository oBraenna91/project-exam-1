const urlNext ="https://noroff.braenna.one/wp-json/wp/v2/posts?page=2&_embed";
const postContainerNext = document.querySelector(".nextTenPosts");
const url ="https://noroff.braenna.one/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".tenBlogPosts");

async function getPosts(){
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults)
        console.log(getResults);
    }
    catch(error){
        console.log(error);
    }
}

getPosts();

function createHTML(posts){
    posts.forEach(function(post){
        postContainer.innerHTML += 
        `<a href="post.html?id=${post.id}" class="post">
            <div class="postTitle"<h2>${post.title.rendered}</h2></div>
            <img src="${post._embedded['wp:featuredmedia'][0].source_url}">
        </a>`;
    })
}


async function getNextTenPosts(){
    try {
        const responseNext = await fetch(urlNext);
        const getNextResults = await responseNext.json();
        createNextHTML(getNextResults)
        console.log(getNextResults);
    }
    catch(error){
        console.log(error);
    }
}

getNextTenPosts();

function createNextHTML(nextPosts){
    nextPosts.forEach(function(nextPosts){
        postContainerNext.innerHTML += 
        `<a href="post.html?id=${nextPosts.id}" class="post">
            <div class="postTitle"<h2>${nextPosts.title.rendered}</h2></div>
            <img src="${nextPosts._embedded['wp:featuredmedia'][0].source_url}">
        </a>`;
    })
}

function displayNextTen() {
    const viewmore = document.querySelector(".nextTenPosts");
    viewmore.style.display = "block";
}