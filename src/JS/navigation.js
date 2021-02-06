import refs from './refs';
import getMovieFromSaved from './localStorage/getSavedItems';
import { mainPageRender } from './render/mainPageRender';
import setItemsPerPage from './transformData/setItemsPerPage';
import createPagination from './pagination/createPagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import onPagination from './pagination/mainPagePagination';
import libraryPageRender from './render/libraryPageRender';

refs.homeLink.addEventListener('click', onHome);
refs.logo.addEventListener('click', onHome);
refs.myLibrary.addEventListener('click', onLibrary);
refs.watchedBtn.addEventListener('click', onLibrary);
refs.queueBtn.addEventListener('click', onLibrary);

// callback при кліку на Home і лого
function onHome(e) {
  e.preventDefault();
  hidenLibrary();

  refs.moviesContainer.innerHTML = '';

  mainPageRender();
  const { visiblePaginationPages } = setItemsPerPage();
  createPagination(20000, 20, visiblePaginationPages, onPagination);
}

// callback при кліку на кнопки бібліотеки
function onLibrary(e) {
  e.preventDefault();
  hidenHome();

  refs.moviesContainer.classList.remove('show-message');

  let key;
  if (e.target === refs.myLibrary || e.target === refs.watchedBtn) {
    key = refs.watchedBtn.innerHTML.toLowerCase();
    refs.watchedBtn.classList.remove('noactive'); // робить кнопку активною
    refs.queueBtn.classList.add('noactive'); // робить кнопку неактивною
  } else {
    key = refs.queueBtn.innerHTML.toLowerCase();
    refs.watchedBtn.classList.add('noactive'); // робить кнопку неактивною
    refs.queueBtn.classList.remove('noactive'); // робить кнопку активною

    // refs.queueBtn.textContent = `clear ${key}`;
  }

  const movies = getMovieFromSaved(key); // записує дані з Localstoradge у змінну

  if (movies.length === 0) {
    refs.moviesContainer.innerHTML = `<p class='info-message'>You don't have saved movies yet</p>`;
    refs.moviesContainer.classList.add('show-message');
    refs.divPagination.innerHTML = '';

    return;
  }

  const { moviesPerPage, visiblePaginationPages } = setItemsPerPage();

  libraryPageRender(movies, 0, moviesPerPage);
  createPagination(
    movies.length,
    moviesPerPage,
    visiblePaginationPages,
    paginationHandler,
  );

  // callback при кліку на сторінки пагінації
  function paginationHandler(eventData) {
    const firstIndex = (eventData.page - 1) * moviesPerPage;
    const lastIndex = firstIndex + moviesPerPage;
    libraryPageRender(movies, firstIndex, lastIndex);
  }
}

// callback для рендеру сторінки бібліотеки
// function libraryPageRender(movies, firstIndex, lastIndex) {
//   refs.moviesContainer.innerHTML = ''; // очищує сторінку від фільмів
//   const newList = movies.slice(firstIndex, lastIndex); // вирізає із масиву даних потрібну к-сть елементів
//   changeGenre(newList); // вибирає назви жанрів
//   changeData(newList); // обрізає дату (залишає тільки рік)
//   renderMarkup(newList, filmLibrary, refs.moviesContainer); // рендерить розмітку по шаблону
// }

function hidenLibrary() {
  refs.myLibrary.classList.remove('active');
  refs.homeLink.classList.add('active');
  refs.form.classList.remove('is-hidden');
  refs.buttonsWrapper.classList.add('is-hidden');
  refs.header.classList.remove('library');
}

function hidenHome() {
  refs.myLibrary.classList.add('active');
  refs.homeLink.classList.remove('active');
  refs.form.classList.add('is-hidden');
  refs.buttonsWrapper.classList.remove('is-hidden');
  refs.header.classList.add('library');
}
