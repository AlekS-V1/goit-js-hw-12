
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api"
import { createGallery, showLoader, hideLoader, clearGallery, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadMore = document.querySelector(".load-button");
let query = "";
let page = 1;
let totalPages = 0;
const limit = 15;

form.addEventListener("submit", async event => {
  event.preventDefault();
  const inputText = document.querySelector('input[name="search-text"]');
  query = inputText.value.trim()
  page = 1;
  hideLoadMoreButton();
  if (!query.trim()) {
    clearGallery();
    hideLoadMoreButton();
    page = 1;
    return inputText.value = "";
  }
  clearGallery();
  showLoader();
    try {
    const { hits = [], totalHits = 0 } = await getImagesByQuery(query, page);

      if (!hits.length) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return;
      }
      if (hits.length) {
        createGallery(hits);
        showLoadMoreButton();
      };

      totalPages = Math.ceil(totalHits / limit);
      if (page === totalPages) {
        hideLoadMoreButton();
        hideLoader();
        return iziToast.error({
          position: "topRight",
          message: "We're sorry, but you've reached the end of search results."
        });
      }

    } catch (error) {
      hideLoadMoreButton();
      hideLoader();
    console.error("Помилка:", error);
    } finally {
      hideLoader();
  };
  event.target.reset();
});

loadMore.addEventListener("click", async function () {
  showLoader();
  hideLoadMoreButton()
  page++;
  try {
    const { hits = [], totalHits = 0 } = await getImagesByQuery(query, page);
    totalPages = Math.ceil(totalHits / limit);

    if (hits.length) {
      createGallery(hits);
    };

    let firstCard;
    if (gallery && gallery.children[0]) {
      firstCard = gallery.children[0];
      const height = firstCard.getBoundingClientRect().height;

      window.scrollBy({
        top: height * 2,
        left: 0,
        behavior: "smooth"
      });
    };
    if (page === totalPages) {
      hideLoadMoreButton();
      hideLoader();
      return iziToast.error({
      position: "topRight",
      message: "We're sorry, but you've reached the end of search results."
      });
    }
    if (page) {
      showLoadMoreButton();
    }

  } catch (error) {
    hideLoadMoreButton();
    hideLoader();
    console.log(error.message);
    }
    // showLoadMoreButton();
  });
