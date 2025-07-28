import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';



let gallery = null;

export function createGallery(images) { 
    const list = document.querySelector(".gallery");
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
    if (list) {
        list.insertAdjacentHTML("beforeend", markup);
    } else {
        alert("Елемент галереї не знайдено в DOM");

    }

    if (!gallery) {
        gallery = new SimpleLightbox('.card a', {
            captionsData: 'alt',            
            captionDelay: 250,        
        });        
    } else {
        gallery.refresh();
    }
};
//Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї,
//                          додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.

export function clearGallery() {
    const list = document.querySelector(".gallery");
    if (list) {
        list.innerHTML = "";
    };
}; // Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає

export function showLoader() {  
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.remove("hidden");
    };
}; // Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add("hidden");
    };
}; // Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

export function showLoadMoreButton() {
    const loadButton = document.querySelector(".load-button");
    if (loadButton) {
        loadButton.classList.remove("load-more-hidden");        
    }
}
// . Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.

export function hideLoadMoreButton() {
    const loadButton = document.querySelector(".load-button");
    if (loadButton) {
        loadButton.classList.add("load-more-hidden");        
    }
} 
// . Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more.Нічого не повертає.