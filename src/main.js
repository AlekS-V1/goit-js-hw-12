
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api"
import { createGallery, showLoader, hideLoader, clearGallery, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
let searchText = "";
let page = 1;
const limit = 15;
const loadMore = document.querySelector(".load-button");
loadMore.addEventListener("click", async function () {
  showLoader();
  hideLoadMoreButton()
  page++;  
  try {
    const data = await getImagesByQuery(searchText, page);
    const totalPages = Math.ceil(data.totalHits / limit)
    createGallery(data.hits)

    const card = document.querySelector(".card");
    const cardHeigh = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeigh * 2,
      behavior: "smooth",
    });    
    
    if (page === totalPages) {
      hideLoadMoreButton();
      hideLoader();
      return iziToast.error({
      position: "topRight",
      message: "We're sorry, but you've reached the end of search results."
      });      
    }
  } catch (error) {
        console.log(error.message);        
  }
  hideLoader();
  showLoadMoreButton();
});



form.addEventListener("submit", event => {
  event.preventDefault();
  const inputText = document.querySelector('input[name="search-text"]');  
  page = 1;
  
  if (inputText.value === " " || inputText.value === "  ") {    
    event.preventDefault();    
    return inputText.value = "";      
  }
  
  searchText = inputText.value.trim();
  clearGallery();
  showLoader();
  
  getImagesByQuery(searchText)
    .then(images => {
      if (images.length <= 0) {
        return iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
      }
      createGallery(images.hits);        
      showLoadMoreButton();
      const cardHeigh = form.getBoundingClientRect().height;      
      window.scrollBy({       
        left: 0,        
        top: cardHeigh,              
        behavior: "smooth",
      
    });
    })
    .catch(error => console.log("Помилка:", error))
    .finally(() => {
    hideLoader();
  })  
  event.target.reset();  
});
