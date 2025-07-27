import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

export function createGallery(images) {     
    const markup = images.map(({
        webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) => 
        `<li class="card">            
                <a href="${largeImageURL}" class="largeImage">
                    <img src="${webformatURL}" class="webFormat" alt="${tags}" />
                </a>                        
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${likes}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${views}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${comments}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${downloads}</p>
                    </div>
                </div>            
        </li>`
    ).join("");    
    list.insertAdjacentHTML("beforeend", markup);

    let gallery = new SimpleLightbox('.largeImage', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    gallery.refresh();
};
//Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї,
//                          додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.

export function clearGallery() {
    list.innerHTML = "";
}; // Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає

export function showLoader() {    
    loader.classList.remove("hidden");
}; // Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

export function hideLoader() {
    loader.classList.add("hidden");
}; // Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.


export function showLoadMoreButton() {
    const loadButton = document.querySelector(".load-button");
    loadButton.classList.replace("load-more-hidden", "load-more");
}
// . Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.

export function hideLoadMoreButton() {
    const loadButton = document.querySelector(".load-button");
    loadButton.classList.replace("load-more", "load-more-hidden");
} 
// . Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more.Нічого не повертає.