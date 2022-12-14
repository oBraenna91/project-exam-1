const url ="https://noroff.braenna.one/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector("#ulCards");
const loadingWheel = document.querySelector("#loading-wheel");



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
        `<li class="listCard">
            <div class="blogCard">
            <a href="post.html?id=${post.id}" class="post">
            <div class="indexPostTitle"<h2>${post.title.rendered}</h2></div>
            <div class="indexPostImage">
                <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="${post._embedded['wp:featuredmedia'][0].alt_text}">
            </div>
            </a>
            </div>
        </li>`;
    })
    loadingWheel.style.display= "none";
}

const nextButton = document.getElementById("carouselNext");
const prevButton = document.getElementById("carouselPrev");

nextButton.addEventListener("click", event => {
    const cardWidth = postContainer.clientWidth;
    postContainer.scrollLeft += cardWidth;
});

prevButton.addEventListener("click", event => {
    const cardWidth = postContainer.clientWidth;
    postContainer.scrollLeft -= cardWidth;
});