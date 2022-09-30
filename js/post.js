const resultsContainer = document.querySelector(".specificPost");

const modalContainer = document.querySelector("#modalBackground");

const openModalImage = document.querySelector("#openModalImage");

const headLineContainer =document.querySelector("#headline");

const loadingWheel = document.querySelector("#loading-wheel");

const queryString = document.location.search;

const params = new URLSearchParams (queryString);

const id = params.get("id");

const url = "https://noroff.braenna.one/wp-json/wp/v2/posts/" + id + "?_embed";

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        createHtml(post);

        document.title = "The Fitness Blog | " + post.title.rendered;
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPost();

function createHtml(post) {
    headLineContainer.innerHTML = `<h1 class="detailsH1">${post.title.rendered}</h1>`;
    resultsContainer.innerHTML = `
                                <div class="details-description">${post.content.rendered}</div>`;
    modalContainer.innerHTML = `
                                <div id="modalImage">
                                <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="${post._embedded['wp:featuredmedia'][0].alt_text}">
                                </div>`;
    openModalImage.innerHTML = `
                                <div id="openModalImageButton">
                                <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="${post._embedded['wp:featuredmedia'][0].alt_text}">
                                </div>`;
    loadingWheel.style.display= "none";
}

openModalImage.addEventListener("click", event => {
    modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", event => {
    modalContainer.style.display = "none";
});