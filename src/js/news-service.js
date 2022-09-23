

// 
//   headers: {
//     Authorization: API_KEY,
//   },
// };
// const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;
https://pixabay.com/api/?key=29882224-53e6cb6eb5c61ad27904c20c4&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1


// fetch(url, options)
// .then(r=>r.json())
// .then(console.log);

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safeSearch=true&per_page=40&page=1`;

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
