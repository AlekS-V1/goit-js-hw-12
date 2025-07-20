
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api"
import { createGallery, showLoader, hideLoader, clearGallery } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const inputText = document.querySelector('input[name="search-text"]');  
  
  if (inputText.value === " " || inputText.value === "  ") {    
    event.preventDefault();    
    return inputText.value = "";      
  }
  
  const searchText = inputText.value.trim();
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
      createGallery(images);
    })
    .finally(() => {
    hideLoader();
  })  
  event.target.reset();  
});