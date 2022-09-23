//*   IMPORTS  libraries

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix';

import axios from 'axios';

//*   IMPORTS  components  files
// import templateFunction from './templates/oneCardTemplate.hbs';
// document.body.innerHTML = templateFunction();

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

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();

refs.searchInput.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  // newsApiService.query = e.currentTarget.elements.query.value;
  // const searchQuery = e.currentTarget.elements.query.value;

  const API_KEY = '30114983-364137b9a9ec33f130a531f95';
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    headers: {
      Authorization: API_KEY,
    },
  };
  const url = `${BASE_URL}?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safeSearch=true&per_page=40&page=1`;
  // const url = `https://pixabay.com/api/?key=29882224-53e6cb6eb5c61ad27904c20c4&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;

  fetch(url, options)
    .then(r => r.json())
    .then(console.log);
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
// }
