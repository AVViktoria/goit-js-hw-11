//*   IMPORTS  libraries

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix';

import axios from 'axios';

//*   IMPORTS  components  files
import templateFunction from './templates/oneCardTemplate.hbs';
// document.body.innerHTML = templateFunction();
import { getImgs } from './js/fetchApi';
import './css/common.css';
// import NewsApiService from './js/news-service';
// import LoadMoreBtn from './js/load-more-btn';

//*     CONSTANTS
const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('[type="text"]'),
  submitBtn: document.querySelector('[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
  spinner: document.querySelector('.spinner-border'),
};
let page = 1;
let searchQuery = '';
let lightbox;

refs.searchInput.addEventListener('submit', onSearch);

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();



// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  // newsApiService.query = e.currentTarget.elements.query.value;
 searchQuery = e.currentTarget.elements.query.value;
 
 if (searchQuery === '') {
  return Notiflix.Notify.failure("Sorry, you didn't write anything");
}

//   if (newsApiService.query === '') {
//     return alert('Введи что-то нормальное');
//   }

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
}